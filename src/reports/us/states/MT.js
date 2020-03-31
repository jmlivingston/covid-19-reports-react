import mapData from '@highcharts/map-collection/countries/us/us-mt-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/mt.json'
import reportService from '../report-service'
import State from '../../State'

function MT() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default MT
