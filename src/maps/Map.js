import Color from 'color'
import Highcharts from 'highcharts'
import boost from 'highcharts/modules/boost'
import drilldown from 'highcharts/modules/drilldown'
import exporting from 'highcharts/modules/exporting'
import map from 'highcharts/modules/map'
import PropTypes from 'prop-types'
import React, { lazy, Suspense } from 'react'
import Loader from '../core/Loader'
// import darkUnica from 'highcharts/themes/dark-unica'
import './Map.css'

const HighchartsReact = lazy(() => import('highcharts-react-official'))

exporting(Highcharts)
boost(Highcharts)
drilldown(Highcharts)
map(Highcharts)
// darkUnica(Highcharts)

Highcharts.setOptions({
  chart: {
    style: {
      fontFamily: 'Lato',
    },
  },
})

const DEFAULT_BORDER_COLOR = '#DDDDDD'

function Map({
  baseColor,
  borderLines,
  colorKey,
  colorMaxValue,
  colorMinValue,
  colorValueInterval,
  data,
  drilldown,
  hoverColor,
  mapData,
  separatorLines,
  seriesJoinBy,
  stateBorderColor,
  title,
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
    boost: {
      enabled: true,
      useGPUTranslations: true,
      usePreallocated: true,
    },
    chart: {
      events: {
        drilldown,
      },
      fontFamily: 'Lato',
    },
    colorAxis: {
      max: colorMaxValue,
      min: colorMinValue,
      stops: colorStops,
      tickInterval: colorValueInterval,
    },
    drilldown: {
      activeDataLabelStyle: {
        color: '#FFFFFF',
        textDecoration: 'none',
        textOutline: '1px #000000',
      },
      drillUpButton: {
        relativeTo: 'spacingBox',
        position: {
          x: 0,
          y: 60,
        },
      },
    },
    // exporting: {
    //   enabled: true,
    // },
    legend: {
      backgroundColor:
        Highcharts.defaultOptions &&
        Highcharts.defaultOptions.legend &&
        Highcharts.defaultOptions.legend.backgroundColor,
      floating: true,
      layout: 'vertical',
      align: 'right',
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
        dataLabels: {
          enabled: true,
          format: '{point.properties.postal-code}',
        },
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
    <Suspense fallback={<Loader />}>
      <div className="highcharts-wrapper">
        <HighchartsReact constructorType={'mapChart'} highcharts={Highcharts} options={options} />
      </div>
    </Suspense>
  ) : (
    'The following props are required: colorMaxValue, colorValueInterval, data, mapData, and seriesJoinBy'
  )
}

Map.defaultProps = {
  baseColor: '#FF0000',
  colorKey: 'value',
  hoverColor: '#A4EDBA',
  stateBorderColor: DEFAULT_BORDER_COLOR,
  title: 'Untitled',
}

Map.propTypes = {
  baseColor: PropTypes.string,
  borderLines: PropTypes.array,
  colorKey: PropTypes.string,
  colorMaxValue: PropTypes.number.isRequired,
  colorMinValue: PropTypes.number,
  colorValueInterval: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  drilldown: PropTypes.func,
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

export default Map
