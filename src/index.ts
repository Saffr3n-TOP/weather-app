import '../assets/styles/style.css';
import { getDefaultWeatherData } from './utils/getWeatherData';
import normalizeWeatherData from './utils/normalizeWeatherData';
import updateWeatherInfo from './utils/updateWeatherInfo';
import content from './components/content';
import error from './components/error';

const root = document.querySelector('.root');

(async () => {
  const weatherData = await getDefaultWeatherData();
  if (weatherData instanceof Error) return root.appendChild(error);

  const normalizedData = normalizeWeatherData(weatherData);
  root.appendChild(content);

  const {
    updateLocation,
    updateCondition,
    updateImage,
    updateActualTemp,
    updateFeelTemp
  } = updateWeatherInfo;

  updateLocation(normalizedData.location.country, normalizedData.location.city);
  updateCondition(normalizedData.current.condition.description);
  updateImage(normalizedData.current.condition.icon);
  updateActualTemp(
    normalizedData.current.temperature.actualC,
    normalizedData.current.temperature.actualF
  );
  updateFeelTemp(
    normalizedData.current.temperature.feelsLikeC,
    normalizedData.current.temperature.feelsLikeF
  );
})();
