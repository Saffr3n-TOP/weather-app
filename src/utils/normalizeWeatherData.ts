import WeatherData from '../types/weatherData';
import WeatherDataNormalized from '../types/weatherDataNormalized';

export default function normalizeWeatherData(data: WeatherData) {
  return {
    location: {
      country: data.location.country,
      city: data.location.name
    },
    current: {
      condition: {
        icon: `https:${data.current.condition.icon}`,
        description: data.current.condition.text
      },
      temperature: {
        actualC: data.current.temp_c,
        actualF: data.current.temp_f,
        feelsLikeC: data.current.feelslike_c,
        feelsLikeF: data.current.feelslike_f
      }
    }
  } as WeatherDataNormalized;
}
