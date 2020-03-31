import mapData from '@highcharts/map-collection/countries/us/us-in-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/in.json'
import reportService from '../report-service'
import State from '../../State'

function IN() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default IN
