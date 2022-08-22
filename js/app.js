//Selected Player List
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
    if(nameListArray.length > 5){
        return alert('You can not add more than 5 players');
    }

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
    if(isNaN(managerCost) === true || isNaN(coachCost) === true){
        return alert('Please input the amounts in number')
    }

    const totalCost = totalPlayerCost + managerCost + coachCost;

    getTextElementValueById('total-cost', totalCost);
})