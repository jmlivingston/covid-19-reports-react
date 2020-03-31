import mapData from '@highcharts/map-collection/countries/us/us-ct-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ct.json'
import reportService from '../report-service'
import State from '../../State'

function CT() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default CT
