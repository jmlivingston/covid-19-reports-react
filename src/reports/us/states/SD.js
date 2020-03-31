import mapData from '@highcharts/map-collection/countries/us/us-sd-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/sd.json'
import reportService from '../report-service'
import State from '../../State'

function SD() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default SD
