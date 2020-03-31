import mapData from '@highcharts/map-collection/countries/us/us-dc-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/dc.json'
import reportService from '../report-service'
import State from '../../State'

function DC() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default DC
