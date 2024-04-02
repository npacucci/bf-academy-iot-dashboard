<script lang="ts">
  import { SETTINGS } from '$lib';
import Widget from './Widget.svelte';
import type {
  ApexOptions
} from 'apexcharts';
import {
  Badge,
  Chart
} from 'flowbite-svelte';
import {
  writable
} from 'svelte/store';

export let value: number = 0;
export let title: string = '';
export let subtitle: string = '';

function getChartOptions(value: number): ApexOptions {

  return {
    ...SETTINGS.CHARTS.RADIAL_CHART_SETTINGS,
    series: [value],
    colors: ['#015d91'],
    plotOptions: {
      radialBar: {
        track: {
          background: '#E5E7EB'
        },
        dataLabels: {
          value: {
            formatter: () => value + '%',
            fontSize: '30px',
          },
          name: {
            show: false
          }
        },
        hollow: {
          size: '70%',
        },
      },
    },
    labels: ['Battery percentage'],
  };
}

const chartOptions = writable(getChartOptions(value))

$: {
  chartOptions.set(getChartOptions(value))
}
</script>

<Widget {title} {subtitle}>
    <Chart options={$chartOptions}></Chart>
</Widget>
