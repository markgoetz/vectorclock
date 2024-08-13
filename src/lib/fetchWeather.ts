import { fetchWeatherApi } from 'openmeteo';

const url = "https://api.open-meteo.com/v1/forecast";

const params = {
  "latitude": 39.9523,
  "longitude": -75.1638,
  "hourly": ["temperature_2m", "weather_code"],
  "daily": ["sunrise", "sunset"],
  "temperature_unit": "fahrenheit",
  "wind_speed_unit": "mph",
  "precipitation_unit": "inch",
  "timezone": "America/New_York",
  "forecast_days": 1,
  "models": "gfs_hrrr"
};

const fetchWeather = async () => {
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0];

  const daily = response.daily()!;
  const hourly = response.hourly()!;

  const temperature = hourly.variables(0)?.valuesArray()?.[0]!;
  const weatherCode = hourly.variables(1)?.valuesArray()?.[0]!;

  const sunrise = Number(daily.variables(0)?.valuesInt64(0)!);
  const sunset = Number(daily.variables(1)?.valuesInt64(0)!);

  return { temperature, weatherCode, sunrise, sunset };
};

export default fetchWeather;
