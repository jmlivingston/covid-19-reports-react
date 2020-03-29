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
  tooltipTitle,
}) {
  const color = Color(baseColor)

  const colorStops = [
    // First stop tweaked slightly for better visibility. Should actually be 0.
    ...[0.025, 0.25, 0.5, 0.75].map((key) => [
      key,
      `rgba(${color.color[0]}, ${color.color[1]}, ${color.color[2]}, ${key})`,
    ]),
    [1, `rgb(${color.color[0]}, ${color.color[1]}, ${color.color[2]})`],
  ]

  const separatorLineData = separatorLines
    ? {
        color: DEFAULT_BORDER_COLOR,
        data: separatorLines,
        name: 'Separator',
        shadow: false,
        type: 'mapline',
      }
    : {}

  const options = {
    colorAxis: {
      max: colorMaxValue,
      min: colorMinValue,
      stops: colorStops,
      tickInterval: colorValueInterval,
    },
    legend: {
      align: 'right',
      backgroundColor:
        Highcharts.defaultOptions &&
        Highcharts.defaultOptions.legend &&
        Highcharts.defaultOptions.legend.backgroundColor,
      floating: true,
      layout: 'vertical',
    },
    mapNavigation: {
      buttonOptions: {
        verticalAlign: 'bottom',
      },
      enabled: true,
    },
    plotOptions: {
      map: {
        colorKey,
      },
      mapline: {
        showInLegend: false,
        enableMouseTracking: false,
      },
    },
    series: [
      {
        borderWidth: 0.5,
        data,
        joinBy: seriesJoinBy,
        mapData,
        name: tooltipTitle,
        shadow: false,
        states: {
          hover: {
            color: hoverColor,
          },
        },
        tooltip: {
          pointFormat: tooltipFormat,
          headerFormat: tooltipHeader,
          valueSuffix: tooltipSuffix,
        },
      },
      {
        color: stateBorderColor,
        data: borderLines,
        shadow: false,
        type: 'mapline',
      },
      separatorLineData,
    ],
    title: {
      text: title,
    },
  }
  return colorMaxValue && colorValueInterval && data && mapData && seriesJoinBy ? (
    <div className="highcharts-wrapper">
      <HighchartsReact constructorType={'mapChart'} highcharts={Highcharts} options={options} />
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
  title: 'Untitled',
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
  tooltipTitle: PropTypes.string,
}

export default CountryMap
