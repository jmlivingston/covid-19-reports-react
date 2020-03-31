import mapData from '@highcharts/map-collection/countries/us/us-tx-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/tx.json'
import reportService from '../report-service'
import State from '../../State'

function TX() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default TX
