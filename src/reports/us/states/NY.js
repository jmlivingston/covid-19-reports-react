import mapData from '@highcharts/map-collection/countries/us/us-ny-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ny.json'
import reportService from '../report-service'
import State from '../../State'

function NY() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default NY
