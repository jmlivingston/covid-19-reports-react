import mapData from '@highcharts/map-collection/countries/us/us-wy-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/wy.json'
import reportService from '../report-service'
import State from '../../State'

function WY() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default WY
