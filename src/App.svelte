<script lang="ts">
  import Clock from './components/Clock.svelte';
  import Weather from './components/Weather.svelte';
  import fetchWeather from './lib/fetchWeather';

  let temperature = 0;
  let code = 0;
  let sunrise = 0;
  let sunset = 0;

  async function updateWeather() {
    const result = await fetchWeather();
    console.log(result);
    temperature = result.temperature;
    code = result.weatherCode;
    sunrise = result.sunrise;
    sunset = result.sunset;
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
      sunrise={sunrise}
      sunset={sunset}
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
