import mapData from '@highcharts/map-collection/countries/us/us-or-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/or.json'
import reportService from '../report-service'
import State from '../../State'

function OR() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default OR
