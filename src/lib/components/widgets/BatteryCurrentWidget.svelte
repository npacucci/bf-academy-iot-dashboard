<script lang="ts">
  import {
    SETTINGS
  } from '$lib';
  import type {
    ChartSeries
  } from '$lib/models';
  import Widget from './Widget.svelte';
  import type {
    ApexOptions
  } from 'apexcharts';
  import {
    Chart
  } from 'flowbite-svelte';
  import {
    writable
  } from 'svelte/store';
  
  export let value: ChartSeries[] = [];
  export let title: string = '';
  export let subtitle: string = '';
  
  const MAX_CURRENT = 20;
  
  function getChartOptions(series: ChartSeries[]): ApexOptions {
    return {
      ...SETTINGS.CHARTS.AREA_CHART_SETTINGS,
      series: [{
        name: "Battery current",
        data: series.map(i => i.value)
      }],
      labels: series.map(i => i.time) as any[],
      yaxis: {
        opposite: true,
        max: MAX_CURRENT,
        min: 0,
        labels: {
          style: {
            fontSize: '16px'
          },
        }
      },
    };
  }
  
  const chartOptions = writable(getChartOptions(value))
  const currentValue = writable(0)
  
  $: {
    currentValue.set(value[value.length - 1]?.value)
    chartOptions.set(getChartOptions(value))
  }
  </script>
  
  <Widget {title} {subtitle}>
    <div slot="head">
      {#if $currentValue != null}
        <h4 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">{$currentValue}{SETTINGS.CURRENT_SUFFIX}</h4>
      {/if}
    </div>
    <Chart options={$chartOptions}></Chart>
  </Widget>
  