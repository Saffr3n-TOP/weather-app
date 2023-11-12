const temp = document.createElement('span');

temp.className = 'text_bold';
temp.textContent = '22°C / 69°F';

const feelTemp = document.createElement('span');
feelTemp.className = 'text';
feelTemp.append('Feels like: ', temp);

export function updateFeelTemp(tempC: number, tempF: number) {
  temp.textContent = `${tempC}°C / ${tempF}°F`;
}

export default feelTemp;
