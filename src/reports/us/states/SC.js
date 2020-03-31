import mapData from '@highcharts/map-collection/countries/us/us-sc-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/sc.json'
import reportService from '../report-service'
import State from '../../State'

function SC() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default SC
