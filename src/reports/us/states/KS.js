import mapData from '@highcharts/map-collection/countries/us/us-ks-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ks.json'
import reportService from '../report-service'
import State from '../../State'

function KS() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default KS
