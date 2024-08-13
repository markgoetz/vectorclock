<script lang="ts">
  export let temperature: number;
  export let code: number;
  export let sunrise: number;
  export let sunset: number;
</script>

<div class="weather">
  <div class="icon">
    <svg inline-src="sunny" />
  </div>
  <div class="temperature">{temperature.toFixed(0)}&deg;F</div>
</div>

<style>
  .weather {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .temperature {
    font-size: 120px;
  }
</style>
