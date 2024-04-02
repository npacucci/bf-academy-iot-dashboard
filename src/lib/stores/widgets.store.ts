import type { ChartSeries } from '$lib/models';
import { writable } from 'svelte/store';

/** All the dashboard widgets data */
export const widgetsData = writable({
  batteryCurrent: [] as ChartSeries[],
  batteryOutCurrent: [] as ChartSeries[],
  batteryVoltage: 0,
  batteryPercentage: 0,
  inverterOutputPower: 0,
  inverterOutputVoltage: 0,
  solarPower: 0,
  solarVoltage: 0,
  solarCurrent: [] as ChartSeries[],
  vrmStatus: ''
})