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
    if(isNaN(perPlayerCost) === true){
        return alert('Please input the amounts in number');
    }
    const playerNumberString = document.getElementById('selected-players').innerText;
    const playerNumber = parseInt(playerNumberString);
    console.log(playerNumber);
    
    const totalPlayerCost = perPlayerCost * playerNumber;
    getTextElementValueById(textElementId, totalPlayerCost);
    return totalPlayerCost;
}



