import mapData from '@highcharts/map-collection/countries/us/us-ar-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ar.json'
import reportService from '../report-service'
import State from '../../State'

function AR() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default AR
