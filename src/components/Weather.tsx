import WeatherIcon from './WeatherIcon';
import styles from './Weather.module.css';

interface WeatherProps {
  temperature: number;
  code: number;
  isDay: number;
  minTemp: number;
  maxTemp: number;
}

function Weather({ temperature, code, isDay, minTemp, maxTemp }: WeatherProps) {
  return (
    <div className={styles.weather}>
      <div className={styles.main}>
        <div>
          <WeatherIcon code={code} isDay={isDay} />
        </div>
        <div className={styles.temperature}>{temperature.toFixed(0)}&deg;</div>
      </div>
      <div className={styles.range}>
        {minTemp.toFixed(0)}&deg;-{maxTemp.toFixed(0)}&deg;
      </div>
    </div>
  );
}

export default Weather;
