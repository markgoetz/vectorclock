import { fetchWeatherApi } from 'openmeteo';

const url = "https://api.open-meteo.com/v1/forecast";

const params = {
	"latitude": 39.9523,
	"longitude": -75.1638,
	"current": ["temperature_2m", "is_day", "weather_code"],
	"daily": ["temperature_2m_min", "temperature_2m_max"],
	"temperature_unit": "fahrenheit",
	"wind_speed_unit": "mph",
	"precipitation_unit": "inch",
	"timezone": "America/New_York",
	"forecast_days": 1,
  "models": "gfs_hrrr",
};

const fetchWeather = async () => {
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0];

  const daily = response.daily()!;
  const current = response.current()!;

  const temperature = current.variables(0)?.value()!;
  const isDay = current.variables(1)?.value()!;
  const weatherCode = current.variables(2)?.value()!;

  const minTemp = Number(daily.variables(0)?.valuesArray()?.[0]);
  const maxTemp = Number(daily.variables(1)?.valuesArray()?.[0]);

  return { temperature, weatherCode, isDay, minTemp, maxTemp };
};

export default fetchWeather;
