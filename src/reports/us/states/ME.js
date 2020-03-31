import mapData from '@highcharts/map-collection/countries/us/us-me-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/me.json'
import reportService from '../report-service'
import State from '../../State'

function ME() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default ME
