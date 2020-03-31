import mapData from '@highcharts/map-collection/countries/us/us-nc-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/nc.json'
import reportService from '../report-service'
import State from '../../State'

function NC() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default NC
