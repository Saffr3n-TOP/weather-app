import WeatherData from '../types/weatherData';
import ErrorData from '../types/errorData';

const API_KEY = '65ac46dfc9cc48478c8190749230811';

export default async function getWeatherData(location: string) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
  ).catch((err) => new Error(err));

  if (response instanceof Error) {
    return response;
  }

  const data = await (
    response.json() as Promise<WeatherData | ErrorData>
  ).catch((err) => new Error(err));

  if ('error' in data) {
    return new Error(data.error.message);
  }

  return data;
}

export async function getDefaultWeatherData() {
  return await getWeatherData('London');
}