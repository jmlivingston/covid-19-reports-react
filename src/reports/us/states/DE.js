import mapData from '@highcharts/map-collection/countries/us/us-de-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/de.json'
import reportService from '../report-service'
import State from '../../State'

function DE() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default DE
