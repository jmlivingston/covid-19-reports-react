import mapData from '@highcharts/map-collection/countries/us/us-ca-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ca.json'
import reportService from '../report-service'
import State from '../../State'

function CA() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default CA
