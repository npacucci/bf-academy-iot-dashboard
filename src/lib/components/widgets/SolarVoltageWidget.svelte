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
  
  const MAX_VOLTAGE = 100;
  
  function getChartOptions(value: number): ApexOptions {
    // Proportioned value based on MAX_POWER as maximum value
    const ratioValue = (value * 100) / MAX_VOLTAGE
  
    return {
      ...SETTINGS.CHARTS.RADIAL_CHART_SETTINGS,
      series: [ratioValue],
      plotOptions: {
        radialBar: {
          track: {
            background: '#E5E7EB'
          },
          dataLabels: {
            value: {
              formatter: () => value + SETTINGS.VOLTAGE_SUFFIX,
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
      labels: ['Current Voltage'],
    };
  }
  
  const chartOptions = writable(getChartOptions(value))
  
  $: {
    chartOptions.set(getChartOptions(value))
  }
  </script>
  
  <Widget {title} {subtitle}>
      <div class="flex justify-end"> <Badge color="dark" large>{MAX_VOLTAGE}{SETTINGS.VOLTAGE_SUFFIX}</Badge> </div>
      <Chart options={$chartOptions}></Chart>
  </Widget>
  