import React from 'react'
import data from '../../../data/us/states/nm.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-nm-all.geo.json'

function NM() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default NM
