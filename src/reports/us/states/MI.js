import mapData from '@highcharts/map-collection/countries/us/us-mi-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/mi.json'
import reportService from '../report-service'
import State from '../../State'

function MI() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default MI
