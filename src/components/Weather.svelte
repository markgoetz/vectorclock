<script lang="ts">
  export let temperature: number;
  export let code: number;
  export let isDay: number;
  export let minTemp: number;
  export let maxTemp: number;
</script>

<div class="weather">
  <div class="main">
    <div class="icon">
      {#if isDay}<svg inline-src="sunny" />{/if}
      {#if !isDay}<svg inline-src="moon" />{/if}
    </div>
    <div class="temperature">{temperature.toFixed(0)}&deg;</div>
  </div>
  <div class="range">
    {minTemp.toFixed(0)}&deg;&ndash;{maxTemp.toFixed(0)}&deg;
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
