import mapData from '@highcharts/map-collection/countries/us/us-la-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/la.json'
import reportService from '../report-service'
import State from '../../State'

function LA() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default LA
