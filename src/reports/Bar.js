import Highcharts from 'highcharts'
import accessibility from 'highcharts/modules/accessibility'
import boost from 'highcharts/modules/boost'
import drilldown from 'highcharts/modules/drilldown'
import exportData from 'highcharts/modules/export-data'
import exporting from 'highcharts/modules/exporting'
import PropTypes from 'prop-types'
import React, { lazy, Suspense } from 'react'
import Loader from '../core/Loader'
import './Bar.css'

const HighchartsReact = lazy(() => import('highcharts-react-official'))

accessibility(Highcharts)
exporting(Highcharts)
boost(Highcharts)
drilldown(Highcharts)
exportData(Highcharts)

function Bar({
  baseColor,
  data,
  drilldown,
  hoverColor,
  seriesJoinBy,
  title,
  tooltipFormat,
  tooltipHeader,
  tooltipSuffix,
  tooltipTitle,
}) {
  const formattedData = data
    .sort((a, b) => (a.cases < b.cases ? 1 : -1))
    .map((datum, index) => [`${index + 1}. ${datum.state} - ${datum.cases.toLocaleString()}`, datum.cases])

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
      height: 2400,
      type: 'bar',
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
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        animation: false,
        color: baseColor,
        pointPadding: 10,
        pointWidth: 20,
      },
    },
    series: [
      {
        borderWidth: 0.5,
        data: formattedData,
        dataLabels: {
          enabled: false,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y}',
          y: 0,
          x: 75,
        },
        joinBy: seriesJoinBy,
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
    ],
    title: {
      text: title,
    },
    xAxis: {
      labels: {
        reserveSpace: true,
        align: 'left',
      },
      scrollbar: {
        enabled: true,
      },
      type: 'category',
    },
    yAxis: {
      min: 0,
      title: {
        text: 'asdf',
      },
    },
  }

  return data && seriesJoinBy ? (
    <Suspense fallback={<Loader />}>
      <div className="highcharts-wrapper">
        <HighchartsReact constructorType={'chart'} highcharts={Highcharts} options={options} />
      </div>
    </Suspense>
  ) : (
    'The following props are required: data, mapData, and seriesJoinBy'
  )
}

Bar.defaultProps = {
  baseColor: 'rgba(255,0,0,0.7)',
  hoverColor: '#A4EDBA',
  title: 'Untitled',
}

Bar.propTypes = {
  baseColor: PropTypes.string,
  data: PropTypes.array.isRequired,
  drilldown: PropTypes.func,
  hoverColor: PropTypes.string,
  seriesJoinBy: PropTypes.string.isRequired,
  title: PropTypes.string,
  tooltipFormat: PropTypes.string,
  tooltipHeader: PropTypes.string,
  tooltipSuffix: PropTypes.string,
  tooltipTitle: PropTypes.string,
}

export default Bar
