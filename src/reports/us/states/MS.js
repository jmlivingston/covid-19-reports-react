import mapData from '@highcharts/map-collection/countries/us/us-ms-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ms.json'
import reportService from '../report-service'
import State from '../../State'

function MS() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default MS
