const nameListArray = [];

function addPlayerName(names){
    
    const nameList = document.getElementById('name-list');
    nameList.innerText = '';
    for(let i = 0; i < names.length;i++){
        
        const name = nameListArray[i].playerName;
        const li = document.createElement('li');
        li.style.paddingLeft = "10px";
        li.style.paddingTop = "5px"
        li.innerText = name;
        nameList.appendChild(li);
    }
}

function getPlayerName(element){
    
    const playerName = element.parentNode.children[0].innerText;
    
    

    const nameObj = {playerName: playerName};
    nameListArray.push(nameObj);

    
    document.getElementById('selected-players').innerText = nameListArray.length;
    addPlayerName(nameListArray);
}





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