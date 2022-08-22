function getInputValueById(fieldId){
    const inputField = document.getElementById(fieldId);
    const amountString = inputField.value;
    const amount = parseFloat(amountString);
    return amount;
}

function getTextElementValueById(elementId, PlayerExpensesAmount){
    const textElement = document.getElementById(elementId);
    textElement.innerText = PlayerExpensesAmount;
    
}

function getPlayerExpenses(playerFieldId, textElementId){
    const perPlayerCost = getInputValueById(playerFieldId);
    
    const totalPlayerCost = perPlayerCost * 5;
    getTextElementValueById(textElementId, totalPlayerCost);
    return totalPlayerCost;
}



