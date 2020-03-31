import mapData from '@highcharts/map-collection/countries/us/us-az-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/az.json'
import reportService from '../report-service'
import State from '../../State'

function AZ() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default AZ
