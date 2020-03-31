import mapData from '@highcharts/map-collection/countries/us/us-ne-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ne.json'
import reportService from '../report-service'
import State from '../../State'

function NE() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default NE
