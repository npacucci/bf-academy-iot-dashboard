<script lang="ts">
import {
  CollectorApi,
  Configuration
} from '$lib/api/backend-collector-api/index'
import {
  onDestroy,
  onMount
} from "svelte";
import {
  PUBLIC_BACKEND_COLLECTOR_API_URL
} from '$env/static/public';
import SolarPowerWidget from '$lib/components/widgets/SolarPowerWidget.svelte';
import {
  SETTINGS
} from '$lib';
import SolarCurrentWidget from '$lib/components/widgets/SolarCurrentWidget.svelte';
import type {
  ChartSeries
} from '$lib/models';
import SolarVoltageWidget from '$lib/components/widgets/SolarVoltageWidget.svelte';
import BatteryVoltageWidget from '$lib/components/widgets/BatteryVoltageWidget.svelte';
import BatteryCurrentWidget from '$lib/components/widgets/BatteryCurrentWidget.svelte';
import BatteryPercentaceWidget from '$lib/components/widgets/BatteryPercentaceWidget.svelte';
import {
  formatValue
} from '$lib/utils/format.util';
import {
  checkFullfilled
} from "$lib/utils";
import InverterPowerWidget from '$lib/components/widgets/InverterPowerWidget.svelte';
import VrmStatusWidget from '$lib/components/widgets/VrmStatusWidget.svelte';
import {
  widgetsData
} from '$lib/stores/widgets.store';

/**
 * Backend configuration.
 */
const conf = new Configuration({
  basePath: PUBLIC_BACKEND_COLLECTOR_API_URL,
});

/**
 * Backend Collector apis.
 */
const collectorApi = new CollectorApi(conf);

let widgetsPollingId: number;

async function readWidgetsData() {
  const [
    batteryCurrent,
    batteryOutCurrent,
    batteryVoltage,
    batteryPercentage,
    inverterOutputPower,
    inverterOutputVoltage,
    solarPower,
    solarVoltage,
    solarCurrent,
    vrmStatus
  ] = await Promise.allSettled([
    collectorApi.getBatteryCurrentV1CollectorBatteryCurrentGet(),
    collectorApi.getBatteryOutputCurrentV1CollectorBatteryCurrentOutGet(),
    collectorApi.getBatteryVoltageV1CollectorBatteryVoltageGet(),
    collectorApi.getBatteryVoltageV1CollectorBatteryPercentageGet(),
    collectorApi.getInverterOutputPowerV1CollectorInverterOutputPowerGet(),
    collectorApi.getInverterOutputVoltageV1CollectorInverterOutputVoltageGet(),
    collectorApi.getSolarPowerV1CollectorSolarPowerGet(),
    collectorApi.getSolarVoltageV1CollectorSolarVoltageGet(),
    collectorApi.getSolarCurrentV1CollectorSolarCurrentGet(),
    collectorApi.getVrmStatusV1CollectorVrmStatusGet()
  ])

  widgetsData.set({
    batteryCurrent: setSeriesValue($widgetsData.batteryCurrent, formatValue(checkFullfilled(batteryCurrent))),
    batteryOutCurrent: setSeriesValue($widgetsData.batteryOutCurrent, formatValue(checkFullfilled(batteryOutCurrent))),
    batteryVoltage: formatValue(checkFullfilled(batteryVoltage)),
    batteryPercentage: formatValue(checkFullfilled(batteryPercentage)),
    inverterOutputPower: formatValue(checkFullfilled(inverterOutputPower)),
    inverterOutputVoltage: formatValue(checkFullfilled(inverterOutputVoltage)),
    solarPower: formatValue(checkFullfilled(solarPower)),
    solarVoltage: formatValue(checkFullfilled(solarVoltage)),
    solarCurrent: setSeriesValue($widgetsData.solarCurrent, formatValue(checkFullfilled(solarCurrent))),
    vrmStatus: checkFullfilled(vrmStatus)
  })

}

function setSeriesValue(series: ChartSeries[], newValue: number): ChartSeries[] {
  if (series.length >= SETTINGS.CHARTS.SERIES_LIMIT) {
    series.shift()
  }

  series.push({
    value: newValue,
    time: new Date().getTime()
  })

  return series
}

onMount(async () => {
  await readWidgetsData()

  widgetsPollingId = setInterval(async () => {
    await readWidgetsData()
  }, SETTINGS.POLLING_TIME)
});

onDestroy(() => {
  clearInterval(widgetsPollingId)
})
</script>

<main class="p-4">
    <div class="mt-px space-y-4">
        <div class="grid gap-4 grid-cols-2 2xl:grid-cols-5">
            <SolarPowerWidget value={$widgetsData.solarPower} title="Solar Panel Power" subtitle="The actual solar panel power" />
            <SolarVoltageWidget value={$widgetsData.solarVoltage} title="Solar Panel Voltage" subtitle="The actual solar panel voltage" />
            <div class="col-span-3">
                <SolarCurrentWidget value={$widgetsData.solarCurrent} title="Solar Panel Current" subtitle="The actual solar panel current history" />
            </div>
        </div>
        <div class="grid gap-4 grid-cols-2 2xl:grid-cols-5">
            <BatteryPercentaceWidget value={$widgetsData.batteryPercentage} title="Battery Percentage" subtitle="The actual battery percentage" />
            <BatteryVoltageWidget value={$widgetsData.batteryVoltage} title="Battery Voltage" subtitle="The actual battery voltage" />
            <div class="col-span-3">
                <BatteryCurrentWidget value={$widgetsData.batteryCurrent} title="Battery Current" subtitle="The actual battery current history" />
            </div>
            <div class="col-span-3">
                <BatteryCurrentWidget value={$widgetsData.batteryOutCurrent} title="Battery Output Current" subtitle="The actual battery current output history" />
            </div>
            <InverterPowerWidget value={$widgetsData.inverterOutputPower} title="Inverter Power" subtitle="The actual inverter power" />
            <div>
                <VrmStatusWidget value={$widgetsData.vrmStatus} title="Vrm Status" subtitle="The actual vrm status" />
            </div>
        </div>
    </div>
</main>
