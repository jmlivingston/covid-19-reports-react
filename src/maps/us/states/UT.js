import mapData from '@highcharts/map-collection/countries/us/us-ut-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ut.json'
import reportService from '../report-service'
import State from '../../State'

function UT() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default UT
