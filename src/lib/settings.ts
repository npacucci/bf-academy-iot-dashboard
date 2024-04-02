import type {
  ApexOptions
} from 'apexcharts';

export const SETTINGS = {
  POLLING_TIME: 5000,
  POWER_SUFFIX: 'W',
  VOLTAGE_SUFFIX: 'V',
  CURRENT_SUFFIX: 'A',
  CHARTS: {
    SERIES_LIMIT: 5,
    AREA_CHART_SETTINGS: {
      colors: ['#06389d'],
      chart: {
        type: 'area',
        height: 250,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        labels: {
          show: false
        },
      },
      legend: {
        horizontalAlign: 'left'
      }
    } as ApexOptions,
    RADIAL_CHART_SETTINGS: {
      colors: ['#25b88e'],
      chart: {
        height: 250,
        type: 'radialBar',
      },
    } as ApexOptions
  }
}