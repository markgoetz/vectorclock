import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import Clock from './components/Clock';
import Weather from './components/Weather';
import fetchWeather from './lib/fetchWeather';
import styles from './App.module.css';

function App() {
  const [temperature, setTemperature] = useState(0);
  const [isDay, setIsDay] = useState(0);
  const [code, setCode] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [hue, setHue] = useState(0);

  useEffect(() => {
    async function updateWeather() {
      const result = await fetchWeather();
      setTemperature(result.temperature);
      setCode(result.weatherCode);
      setIsDay(result.isDay);
      setMinTemp(result.minTemp);
      setMaxTemp(result.maxTemp);
    }

    function updateHue() {
      setHue((h) => (h + 1) % 360);
    }

    updateWeather();
    updateHue();
    const weatherId = window.setInterval(updateWeather, 1000 * 60 * 15);
    const hueId = window.setInterval(updateHue, 1000 * 22);

    return () => {
      window.clearInterval(weatherId);
      window.clearInterval(hueId);
    };
  }, []);

  const colors = {
    '--bg-color': `oklch(0.3027 0.0494 ${hue})`,
    '--fg-color': `oklch(0.7537 0.1252 ${hue})`,
  } as CSSProperties;

  return (
    <main className={styles.main} style={colors}>
      <div className={styles.container}>
        <div className={styles.cell}>
          <Clock />
        </div>
        <div className={styles.cell}>
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
  );
}

export default App;
