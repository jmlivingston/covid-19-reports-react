import mapData from '@highcharts/map-collection/countries/us/us-ky-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ky.json'
import reportService from '../report-service'
import State from '../../State'

function KY() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default KY
