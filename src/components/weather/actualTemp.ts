const actualTemp = document.createElement('span');

actualTemp.className = 'text text_large text_bold';
actualTemp.textContent = '24°C / 72°F';

export function updateActualTemp(tempC: number, tempF: number) {
  actualTemp.textContent = `${tempC}°C / ${tempF}°F`;
}

export default actualTemp;
