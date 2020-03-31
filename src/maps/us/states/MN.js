import mapData from '@highcharts/map-collection/countries/us/us-mn-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/mn.json'
import reportService from '../report-service'
import State from '../../State'

function MN() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default MN
