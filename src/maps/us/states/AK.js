import mapData from '@highcharts/map-collection/countries/us/us-ak-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ak.json'
import reportService from '../report-service'
import State from '../../State'

function AK() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default AK
