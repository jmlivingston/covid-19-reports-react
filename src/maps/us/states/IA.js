import mapData from '@highcharts/map-collection/countries/us/us-ia-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ia.json'
import reportService from '../report-service'
import State from '../../State'

function IA() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default IA
