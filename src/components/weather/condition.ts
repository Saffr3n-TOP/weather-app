const condition = document.createElement('span');

condition.className = 'text text_large text_bold';
condition.textContent = 'Weather condition';

export function updateCondition(conditionDescr: string) {
  condition.textContent = conditionDescr;
}

export default condition;
