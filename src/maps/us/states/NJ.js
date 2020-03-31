import mapData from '@highcharts/map-collection/countries/us/us-nj-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/nj.json'
import reportService from '../report-service'
import State from '../../State'

function NJ() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default NJ
