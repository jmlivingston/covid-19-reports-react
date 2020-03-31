import mapData from '@highcharts/map-collection/countries/us/us-tn-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/tn.json'
import reportService from '../report-service'
import State from '../../State'

function TN() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default TN
