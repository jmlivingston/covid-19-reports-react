// Aggregate and normaliz data from NYT Covid repository.
const path = require('path')
const fs = require('fs')

const dataPath = path.join(
  __dirname,
  '../../../scripts/data/us/nytimes-covid-19-data'
)
const parsedDataPath = path.join(__dirname, '../../../src/reports/us')
const states = require('us-state-codes')
// const usStateCapitals = require('../scripts/data/misc/us-state-capitals.json')
const usLatLngJson = require('us_latlng_json/us_latlng.json')

if (fs.existsSync(dataPath)) {
  function parseCounties() {
    const usCountiesCsv = fs
      .readFileSync(path.join(dataPath, 'us-counties.csv'))
      .toString()

    const usCountiesJson = usCountiesCsv
      .split('\n')
      .slice(1)
      .map(value => {
        const columns = value.split(',')
        const stateCode = states.getStateCodeByStateName(columns[2])
        const position = usLatLngJson[stateCode]
          ? usLatLngJson[stateCode].counties[columns[1]]
          : {}

        return {
          // date: columns[0],
          county: columns[1],
          state: columns[2],
          // stateCode,
          // position,
          fips: columns[3],
          cases: columns[4],
          deaths: columns[5]
        }
      })

    const usCountiesTotalJson = usCountiesJson.reduce((acc, value) => {
      let newValue = {}

      if (acc[`${value.state}-${value.county}`]) {
        newValue = {
          ...acc,
          [`${value.state}-${value.county}`]: {
            ...value,
            cases:
              acc[`${value.state}-${value.county}`].cases + value.cases
                ? parseInt(value.cases)
                : 0,
            deaths:
              acc[`${value.state}-${value.county}`].deaths + value.deaths
                ? parseInt(value.deaths)
                : 0
          }
        }
      } else {
        newValue = {
          ...acc,
          [`${value.state}-${value.county}`]: {
            ...value,
            cases: value.cases ? parseInt(value.cases) : 0,
            deaths: value.deaths ? parseInt(value.deaths) : 0
          }
        }
      }
      return newValue
    }, {})

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

    fs.writeFileSync(
      path.join(parsedDataPath, 'us-counties-total.json'),
      JSON.stringify(usCountiesTotalArray, null, 2)
    )
  }

  function parseStates() {
    const usStatesCsv = fs
      .readFileSync(path.join(dataPath, 'us-states.csv'))
      .toString()

    let summary = {
      cases: 0,
      deaths: 0,
      lastUpdated: new Date().toGMTString()
    }

    const usStatesJson = usStatesCsv
      .split('\n')
      .slice(1)
      .map(value => {
        const columns = value.split(',')
        // const stateCode = states.getStateCodeByStateName(columns[1])
        // const stateInfo = usStateCapitals[stateCode]
        summary.cases += parseInt(columns[3])
        summary.deaths += parseInt(columns[4])

        return {
          // date: columns[0],
          state: columns[1],
          // stateCode,
          // capital: stateInfo ? stateInfo.capital : '',
          // position: {
          //   lat: stateInfo ? parseInt(stateInfo.lat) : null,
          //   lng: stateInfo ? parseInt(stateInfo.long) : null
          // },
          fips: `US${columns[2]}`, // Highcharts has a prefix
          cases: columns[3],
          deaths: columns[4]
        }
      })

    const usStatesTotalJson = usStatesJson.reduce((acc, value) => {
      let newValue = {}

      if (acc[value.state]) {
        newValue = {
          ...acc,
          [value.state]: {
            ...value,
            cases:
              acc[value.state].cases + value.cases ? parseInt(value.cases) : 0,
            deaths:
              acc[value.state].deaths + value.deaths
                ? parseInt(value.deaths)
                : 0
          }
        }
      } else {
        newValue = {
          ...acc,
          [value.state]: {
            ...value,
            cases: value.cases ? parseInt(value.cases) : 0,
            deaths: value.deaths ? parseInt(value.deaths) : 0
          }
        }
      }
      return newValue
    }, {})

    let usStatesTotalArray = Object.keys(usStatesTotalJson).map(key => {
      return usStatesTotalJson[key]
    })

    fs.writeFileSync(
      path.join(parsedDataPath, 'us-states-total.json'),
      JSON.stringify(usStatesTotalArray, null, 2)
    )

    fs.writeFileSync(
      path.join(parsedDataPath, 'us-summary.json'),
      JSON.stringify(summary, null, 2)
    )
  }

  parseCounties()
  parseStates()
} else {
  console.error('ERROR: Run npm run get-data first!')
}
