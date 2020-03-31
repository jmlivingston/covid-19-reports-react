import mapData from '@highcharts/map-collection/countries/us/us-nv-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/nv.json'
import reportService from '../report-service'
import State from '../../State'

function NV() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default NV
