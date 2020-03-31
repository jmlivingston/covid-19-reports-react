import mapData from '@highcharts/map-collection/countries/us/us-md-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/md.json'
import reportService from '../report-service'
import State from '../../State'

function MD() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default MD
