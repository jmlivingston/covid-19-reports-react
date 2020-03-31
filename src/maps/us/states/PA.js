import mapData from '@highcharts/map-collection/countries/us/us-pa-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/pa.json'
import reportService from '../report-service'
import State from '../../State'

function PA() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default PA
