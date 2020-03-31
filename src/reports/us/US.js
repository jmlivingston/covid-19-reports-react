import mapData from '@highcharts/map-collection/countries/us/us-all.geo.json'
import React from 'react'
import separatorLines from '../../data/us/us-separator-lines.json'
import data from '../../data/us/us.json'
import Country from '../Country'
import reportService from './report-service'

function US() {
  return <Country {...data} mapData={mapData} reportService={reportService} separatorLines={separatorLines} />
}

export default US
