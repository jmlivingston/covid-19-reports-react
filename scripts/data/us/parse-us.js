// Aggregate and normalize data from NYT Covid repository.
const path = require('path')
const fs = require('fs')
const states = require('us-state-codes')

const dataPath = path.join(__dirname, '../../../scripts/data/us/nytimes-covid-19-data')
const parsedDataPath = path.join(__dirname, '../../../src/maps/us')
const lastUpdated = new Date().toGMTString()

if (fs.existsSync(dataPath)) {
  // Counties
  const usCountiesCsv = fs.readFileSync(path.join(dataPath, 'us-counties.csv')).toString()

  const usCountiesJson = usCountiesCsv
    .split('\n')
    .slice(1)
    .map(value => {
      const columns = value.split(',')
      return {
        county: columns[1],
        state: columns[2],
        stateCode: states.getStateCodeByStateName(columns[2]),
        fips: columns[3],
        cases: columns[4],
        deaths: columns[5]
      }
    })

  const usCountiesTotalJson = usCountiesJson.reduce(
    (acc, value) => ({
      ...acc,
      [`${value.state}-${value.county}`]: {
        ...value,
        cases: value.cases ? parseInt(value.cases) : 0,
        deaths: value.deaths ? parseInt(value.deaths) : 0
      }
    }),
    {}
  )

  // NYT combines some counties into one entry, so we're splitting these according to fip codes.
  const exceptions = {
    'Missouri-Kansas City': [
      { county: 'Cass', fips: '29037' },
      { county: 'Clay', fips: '29047' },
      { county: 'Jackson', fips: '29095' },
      { county: 'Platte', fips: '29165' }
    ],
    // Yes, I know these are boroughs. ;)
    'New York-New York City': [
      { county: 'Bronx', fips: '36005' },
      { county: 'Kings', fips: '36047' },
      { county: 'New York', fips: '36061' },
      { county: 'Queens', fips: '36081' },
      { county: 'Richmond', fips: '36085' }
    ]
  }

  let usCountiesTotalArray = Object.keys(usCountiesTotalJson)
    .filter(key => !Object.keys(exceptions).includes(key))
    .map(key => {
      return usCountiesTotalJson[key]
    })

  Object.keys(exceptions).forEach(key => {
    const countyTotal = usCountiesTotalJson[key]
    const exception = exceptions[key]
    const cases = Math.round(countyTotal.cases / exception.length)
    const deaths = Math.round(countyTotal.deaths / exception.length)
    exceptions[key].forEach(county => {
      usCountiesTotalArray.push({
        ...countyTotal,
        ...county,
        cases,
        deaths
      })
    })
  })

  // fs.writeFileSync(path.join(parsedDataPath, 'us-counties-total.json'), JSON.stringify(usCountiesTotalArray, null, 2))

  // States
  const usStatesCsv = fs.readFileSync(path.join(dataPath, 'us-states.csv')).toString()

  let summary = {
    cases: 0,
    deaths: 0,
    lastUpdated
  }

  const usStatesJson = usStatesCsv
    .split('\n')
    .slice(1)
    .map(value => {
      const columns = value.split(',')
      return {
        state: columns[1],
        drilldown: columns[1],
        stateCode: states.getStateCodeByStateName(columns[1]),
        fips: `US${columns[2]}`, // Highcharts requires a prefix
        cases: columns[3],
        deaths: columns[4]
      }
    })

  const usStatesTotalJson = usStatesJson.reduce(
    (acc, value) => ({
      ...acc,
      [value.state]: {
        ...value,
        cases: value.cases ? parseInt(value.cases) : 0,
        deaths: value.deaths ? parseInt(value.deaths) : 0
      }
    }),
    {}
  )

  let usStatesTotalArray = Object.keys(usStatesTotalJson).map(key => {
    return usStatesTotalJson[key]
  })

  usStatesTotalArray.forEach(state => {
    summary.cases += parseInt(state.cases)
    summary.deaths += parseInt(state.deaths)
  })

  summary.casesMax = usStatesTotalArray.sort((a, b) => (a.cases < b.cases ? 1 : -1))[0].cases
  summary.deathsMax = usStatesTotalArray.sort((a, b) => (a.deaths < b.deaths ? 1 : -1))[0].deaths

  fs.writeFileSync(
    path.join(parsedDataPath, 'country.json'),
    JSON.stringify(
      {
        summary: { name: 'USA', ...summary },
        data: usStatesTotalArray
      },
      null,
      2
    )
  )

  const filteredStateData = usStatesTotalArray.filter(
    stateDatum => stateDatum.stateCode && stateDatum.stateCode !== 'PR'
  )

  filteredStateData.forEach(stateDatum => {
    const comp = `import mapData from '@highcharts/map-collection/countries/us/us-${stateDatum.stateCode.toLowerCase()}-all.geo.json'
  import React from 'react'
  import data from './${stateDatum.stateCode.toLowerCase()}.json'
  import State from '../State'
  
  function ${stateDatum.stateCode}() {
    return <State data={data} mapData={mapData} />
  }
  
  export default ${stateDatum.stateCode}
  
    `
    fs.writeFileSync(path.join(__dirname, `../../../src/maps/us/states/${stateDatum.stateCode}.js`), comp)
    const stateData = usCountiesTotalArray.filter(countyDatum => countyDatum.stateCode === stateDatum.stateCode)

    const cases = stateData.reduce((acc, value) => acc + value.cases, 0)
    const deaths = stateData.reduce((acc, value) => acc + value.deaths, 0)
    const casesMax = stateData.sort((a, b) => (a.cases < b.cases ? 1 : -1))[0].cases
    const deathsMax = stateData.sort((a, b) => (a.deaths < b.deaths ? 1 : -1))[0].deaths

    fs.writeFileSync(
      path.join(__dirname, `../../../src/maps/us/states/${stateDatum.stateCode.toLowerCase()}.json`),
      JSON.stringify(
        {
          summary: { name: stateDatum.state, cases, casesMax, deaths, deathsMax, lastUpdated },
          data: stateData
        },
        null,
        2
      )
    )
  })

  const stateRoutes = `import React, { lazy } from 'react'
  import { Route } from 'react-router-dom'
  ${filteredStateData
    .map(
      stateDatum => `const ${stateDatum.stateCode} = lazy(() => import('../maps/us/states/${stateDatum.stateCode}'))`
    )
    .join('\r\n')}
  
  function StateRoutes() {
    return (
      <>
      ${filteredStateData
        .map(
          stateDatum =>
            `<Route exact path={\`/us/${stateDatum.stateCode.toLowerCase()}\`}><${stateDatum.stateCode} /></Route>`
        )
        .join('\r\n')}
      </>
    )
  }
  
  export default StateRoutes
  
  `

  fs.writeFileSync(path.join(__dirname, '../../../src/core/StateRoutes.js'), stateRoutes)
} else {
  // eslint-disable-next-line no-console
  console.error('ERROR: Run npm run get-data first!')
}
