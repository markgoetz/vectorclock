<script lang="ts">
  import DayWeather from "./DayWeather.svelte";
  import NightWeather from './NightWeather.svelte';

  export let temperature: number;
  export let code: number;
  export let isDay: number;
  export let minTemp: number;
  export let maxTemp: number;
</script>

<div class="weather">
  <div class="main">
    <div class="icon">
      {#if isDay}<DayWeather code={code} />{/if}
      {#if !isDay}<NightWeather code={code} />{/if}
    </div>
    <div class="temperature">{temperature.toFixed(0)}&deg;</div>
  </div>
  <div class="range">
    {minTemp.toFixed(0)}&deg;-{maxTemp.toFixed(0)}&deg;
  </div>
</div>

<style>
  .weather {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .temperature {
    font-size: 80pt;
  }

  .range {
    font-size: 40pt;
  }
</style>
