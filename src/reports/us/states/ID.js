import mapData from '@highcharts/map-collection/countries/us/us-id-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/id.json'
import reportService from '../report-service'
import State from '../../State'

function ID() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default ID
