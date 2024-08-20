<script lang="ts">
  import Clock from './components/Clock.svelte';
  import Weather from './components/Weather.svelte';
  import fetchWeather from './lib/fetchWeather';

  let temperature = 0;
  let isDay = 0;
  let code = 0;
  let minTemp = 0;
  let maxTemp = 0;;

  async function updateWeather() {
    const result = await fetchWeather();
    temperature = result.temperature;
    code = result.weatherCode;
    isDay = result.isDay;
    minTemp = result.minTemp;
    maxTemp = result.maxTemp;
  }

  function startWeatherLoop(_node: HTMLElement) {
    updateWeather();
    window.setInterval(async () => {
      updateWeather();
    }, 1000 * 60 * 15);
  }
</script>

<main use:startWeatherLoop>
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
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
  }

  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
