import mapData from '@highcharts/map-collection/countries/us/us-wv-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/wv.json'
import reportService from '../report-service'
import State from '../../State'

function WV() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default WV
