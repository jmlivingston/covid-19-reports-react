import mapData from '@highcharts/map-collection/countries/us/us-mo-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/mo.json'
import reportService from '../report-service'
import State from '../../State'

function MO() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default MO
