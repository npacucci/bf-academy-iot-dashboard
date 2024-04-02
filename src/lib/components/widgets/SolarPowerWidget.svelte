<script lang="ts">
import {
  SETTINGS
} from '$lib';
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

const MAX_POWER = 110;

function getChartOptions(value: number): ApexOptions {
  // Proportioned value based on MAX_POWER as maximum value
  const ratioValue = (value * 100) / MAX_POWER

  return {
    ...SETTINGS.CHARTS.RADIAL_CHART_SETTINGS,
    series: [ratioValue],
    colors: ['#25b842'],
    plotOptions: {
      radialBar: {
        track: {
          background: '#E5E7EB'
        },
        dataLabels: {
          value: {
            formatter: () => value + SETTINGS.POWER_SUFFIX,
            fontSize: '30px',
          },
          name: {
            show: false
          }
        },
        hollow: {
          size: '50%',
        },
      },
    },
    labels: ['Current Power'],
  };
}

const chartOptions = writable(getChartOptions(value))

$: {
  chartOptions.set(getChartOptions(value))
}
</script>

<Widget {title} {subtitle}>
    <div class="flex justify-end"> <Badge color="dark" large>{MAX_POWER}{SETTINGS.POWER_SUFFIX}</Badge> </div>
    <Chart options={$chartOptions}></Chart>
</Widget>
