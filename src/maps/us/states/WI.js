import mapData from '@highcharts/map-collection/countries/us/us-wi-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/wi.json'
import reportService from '../report-service'
import State from '../../State'

function WI() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default WI
