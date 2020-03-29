import Color from 'color'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import map from 'highcharts/modules/map'
import PropTypes from 'prop-types'
import React from 'react'
import './CountryMap.css'

map(Highcharts)

const DEFAULT_BORDER_COLOR = '#DDDDDD'

function CountryMap({
  baseColor = '#FF0000',
  borderLines,
  colorKey = 'value',
  colorMaxValue,
  colorMinValue,
  colorValueInterval,
  data,
  hoverColor = '#A4EDBA',
  mapData,
  separatorLines,
  seriesJoinBy,
  stateBorderColor = DEFAULT_BORDER_COLOR,
  title = 'Untitled',
  tooltipFormat,
  tooltipHeader,
  tooltipSuffix,
  tooltipTitle
}) {
  const color = Color(baseColor)

  const colorStops = [
    // First stop tweaked slightly for better visibility. Should actually be 0.
    ...[0.025, 0.25, 0.5, 0.75].map(key => [
      key,
      `rgba(${color.color[0]}, ${color.color[1]}, ${color.color[2]}, ${key})`
    ]),
    [1, `rgb(${color.color[0]}, ${color.color[1]}, ${color.color[2]})`]
  ]

  const separatorLineData = separatorLines
    ? {
        type: 'mapline',
        name: 'Separator',
        data: separatorLines,
        color: DEFAULT_BORDER_COLOR,
        shadow: false
      }
    : {}

  const options = {
    title: {
      text: title
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions &&
        Highcharts.defaultOptions.legend &&
        Highcharts.defaultOptions.legend.backgroundColor
    },
    mapNavigation: {
      enabled: true
    },
    colorAxis: {
      min: colorMinValue,
      max: colorMaxValue,
      tickInterval: colorValueInterval,
      stops: colorStops
    },
    plotOptions: {
      map: {
        colorKey
      },
      mapline: {
        showInLegend: false,
        enableMouseTracking: false
      }
    },
    series: [
      {
        mapData,
        data,
        joinBy: seriesJoinBy,
        name: tooltipTitle,
        tooltip: {
          pointFormat: tooltipFormat,
          headerFormat: tooltipHeader,
          valueSuffix: tooltipSuffix
        },
        borderWidth: 0.5,
        states: {
          hover: {
            color: hoverColor
          }
        },
        shadow: false
      },
      {
        type: 'mapline',
        data: borderLines,
        color: stateBorderColor,
        shadow: false
      },
      separatorLineData
    ]
  }
  return colorMaxValue &&
    colorValueInterval &&
    data &&
    mapData &&
    seriesJoinBy ? (
    <div className="highcharts-wrapper">
      <HighchartsReact
        constructorType={'mapChart'}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  ) : (
    'The following props are required: colorMaxValue, colorValueInterval, data, mapData, and seriesJoinBy'
  )
}

CountryMap.defaultProps = {
  baseColor: '#FF0000',
  colorKey: 'value',
  hoverColor: '#A4EDBA',
  stateBorderColor: DEFAULT_BORDER_COLOR,
  title: 'Untitled'
}

CountryMap.propTypes = {
  baseColor: PropTypes.string,
  borderLines: PropTypes.array,
  colorKey: PropTypes.string,
  colorMaxValue: PropTypes.number.isRequired,
  colorMinValue: PropTypes.number,
  colorValueInterval: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  hoverColor: PropTypes.string,
  mapData: PropTypes.object.isRequired,
  separatorLines: PropTypes.array,
  seriesJoinBy: PropTypes.string.isRequired,
  stateBorderColor: PropTypes.string,
  title: PropTypes.string,
  tooltipFormat: PropTypes.string,
  tooltipHeader: PropTypes.string,
  tooltipSuffix: PropTypes.string,
  tooltipTitle: PropTypes.string
}

export default CountryMap
