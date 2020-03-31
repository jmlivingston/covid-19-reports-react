import mapData from '@highcharts/map-collection/countries/us/us-wa-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/wa.json'
import reportService from '../report-service'
import State from '../../State'

function WA() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default WA
