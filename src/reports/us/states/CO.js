import mapData from '@highcharts/map-collection/countries/us/us-co-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/co.json'
import reportService from '../report-service'
import State from '../../State'

function CO() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default CO
