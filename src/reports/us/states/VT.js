import mapData from '@highcharts/map-collection/countries/us/us-vt-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/vt.json'
import reportService from '../report-service'
import State from '../../State'

function VT() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default VT
