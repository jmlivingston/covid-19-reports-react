import mapData from '@highcharts/map-collection/countries/us/us-oh-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/oh.json'
import reportService from '../report-service'
import State from '../../State'

function OH() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default OH
