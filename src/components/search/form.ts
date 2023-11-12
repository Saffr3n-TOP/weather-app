import '../../../assets/styles/form.css';
import getWeatherData from '../../utils/getWeatherData';
import normalizeWeatherData from '../../utils/normalizeWeatherData';
import input from './input';
import button from './button';
import updateWeatherInfo from '../../utils/updateWeatherInfo';

const form = document.createElement('form');

form.noValidate = true;
form.className = 'form';
form.append(input, button);

form.onsubmit = async (e) => {
  e.preventDefault();
  input.value = input.value.trim();

  if (!form.checkValidity()) {
    input.setCustomValidity('Please fill out this field.');
    return form.reportValidity();
  }

  const location = input.value;
  const weatherData = await getWeatherData(location);

  if (weatherData instanceof Error) {
    input.setCustomValidity(weatherData.message);
    return form.reportValidity();
  }

  const normalizedData = normalizeWeatherData(weatherData);
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
};

export default form;
