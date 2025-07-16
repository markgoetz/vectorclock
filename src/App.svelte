<script lang="ts">
  import Clock from './components/Clock.svelte';
  import Weather from './components/Weather.svelte';
  import fetchWeather from './lib/fetchWeather';

  let temperature = 0;
  let isDay = 0;
  let code = 0;
  let minTemp = 0;
  let maxTemp = 0;
  let hue = 0;

  async function updateWeather() {
    const result = await fetchWeather();
    temperature = result.temperature;
    code = result.weatherCode;
    isDay = result.isDay;
    minTemp = result.minTemp;
    maxTemp = result.maxTemp;
  }

  function updateHue() {
    hue = (hue + 1) % 360;
  }

  function startLoop(_node: HTMLElement) {
    updateWeather();
    updateHue();
    window.setInterval(async () => {
      updateWeather();
    }, 1000 * 60 * 15);

    window.setInterval(updateHue, 1000 * 60)
  }
</script>

<main use:startLoop style="--bg-color: oklch(0.3027 0.0494 {hue}); --fg-color: oklch(0.7537 0.1252 {hue})">
  <div class="container">
    <div class="cell"><Clock /></div>
    <div class="cell">
      <Weather
        temperature={temperature}
        code={code}
        isDay={isDay}
        minTemp={minTemp}
        maxTemp={maxTemp}
      />
    </div>
  </div>
</main>

<style>
  main {
    color: var(--fg-color);
    background-color: var(--bg-color);
    height: 100%;
  }

  .container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    max-width: 1280px;
    height: 400px;
  }

  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
