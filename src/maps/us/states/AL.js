import React from 'react'
import data from '../../../data/us/states/al.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-al-all.geo.json'

function AL() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default AL
