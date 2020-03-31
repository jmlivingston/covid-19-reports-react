import mapData from '@highcharts/map-collection/countries/us/us-ok-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ok.json'
import reportService from '../report-service'
import State from '../../State'

function OK() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default OK
