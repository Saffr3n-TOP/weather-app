const condition = document.createElement('span');

condition.className = 'text text_large text_bold';

export function updateCondition(conditionDescr: string) {
  condition.textContent = conditionDescr;
}

export default condition;
