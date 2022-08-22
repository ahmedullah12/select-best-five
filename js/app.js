





// budget section calculation

document.getElementById('btn-calculate').addEventListener('click', function(){
    
    getPlayerExpenses('per-player-cost', 'player-expenses');
})

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const totalPlayerCost = getPlayerExpenses('per-player-cost', 'player-expenses');
    
    const managerCost = getInputValueById('manager-cost');
    const coachCost = getInputValueById('coach-cost');

    const totalCost = totalPlayerCost + managerCost + coachCost;

    getTextElementValueById('total-cost', totalCost);


})