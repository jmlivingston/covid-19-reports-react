import mapData from '@highcharts/map-collection/countries/us/us-ri-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ri.json'
import reportService from '../report-service'
import State from '../../State'

function RI() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default RI
