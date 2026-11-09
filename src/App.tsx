import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import FullClock from './components/FullClock';
import MinimalClock from './components/MinimalClock';
import Weather from './components/Weather';
import fetchWeather from './lib/fetchWeather';
import isOvernight from './lib/isOvernight';
import styles from './App.module.css';

function App() {
  const [now, setNow] = useState(() => new Date());
  const [temperature, setTemperature] = useState(0);
  const [isDay, setIsDay] = useState(0);
  const [code, setCode] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 500);
    return () => window.clearInterval(id);
  }, []);

  const idle = isOvernight(now);

  useEffect(() => {
    function updateHue() {
      setHue((h) => (h + 1) % 360);
    }

    updateHue();
    const id = window.setInterval(updateHue, 1000 * 22);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (idle) return;

    async function updateWeather() {
      const result = await fetchWeather();
      setTemperature(result.temperature);
      setCode(result.weatherCode);
      setIsDay(result.isDay);
      setMinTemp(result.minTemp);
      setMaxTemp(result.maxTemp);
    }

    updateWeather();
    const id = window.setInterval(updateWeather, 1000 * 60 * 15);
    return () => window.clearInterval(id);
  }, [idle]);

  const colors = (
    idle
      ? {
          '--bg-color': `oklch(0.1 0.04 ${hue})`,
          '--fg-color': `oklch(0.62 0.04 ${hue})`,
        }
      : {
          '--bg-color': `oklch(0.3027 0.0494 ${hue})`,
          '--fg-color': `oklch(0.7537 0.1252 ${hue})`,
        }
  ) as CSSProperties;

  return (
    <main className={styles.main} style={colors}>
      {idle ? (
        <div className={styles.idle}>
          <MinimalClock now={now} />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.cell}>
            <FullClock now={now} />
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
      )}
    </main>
  );
}

export default App;
