import mapData from '@highcharts/map-collection/countries/us/us-nm-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/nm.json'
import reportService from '../report-service'
import State from '../../State'

function NM() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default NM
