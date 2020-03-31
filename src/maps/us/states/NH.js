import mapData from '@highcharts/map-collection/countries/us/us-nh-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/nh.json'
import reportService from '../report-service'
import State from '../../State'

function NH() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default NH
