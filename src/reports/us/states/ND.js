import mapData from '@highcharts/map-collection/countries/us/us-nd-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/nd.json'
import reportService from '../report-service'
import State from '../../State'

function ND() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default ND
