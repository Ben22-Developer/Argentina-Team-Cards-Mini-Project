class aPlayer {
    constructor (name,position,number,nickname = 'N/A') {
        this.name = name;
        this.position = position;
        this.number = number;
        this.nickname = nickname;
    }
}

const allPlayers = 
[
    new aPlayer('Sergio Almirón','forward',1), new aPlayer('Sergio Baptista','midfielder',2),
    new aPlayer('Ricardo Bochini','midfielder',3, 'El Bocha'), new aPlayer('Claudio Borghi','midfielder',4,'Bichi'), 
    new aPlayer('José Luis Brown','defender',5,'Tata'), new aPlayer('Daniel Passarella','defender',6,'El Gran Capitán'),
    new aPlayer('Jorge Burruchaga','forward',7,'Burru'), new aPlayer('Néstor Clausen','defender',8),
    new aPlayer('José Luis Cuciuffo','defender',9,'NickEl Cuchu'), new aPlayer('(Captain) Diego Maradona','midfielder',10,'El Pibe de Oro'),
    new aPlayer('Jorge Valdano','forward',11,'The Philosopher of Football'), new aPlayer('Héctor Enrique','midfielder',12,'N/A'),
    new aPlayer('Oscar Garré','defender',13,'N/A'), new aPlayer('Ricardo Giusti','midfielder',14,'N/A'),
    new aPlayer('Luis Islas','goalkeeper',15,'El loco'), new aPlayer('Julio Olarticoechea','defender',16,'N/A'),
    new aPlayer('Pedro Pasculli','forward',17,'N/A'), new aPlayer('Nery Pumpido','goalkeeper',18,'N/A'),
    new aPlayer('Oscar Ruggeri','defender',19,'El Cabezón'), new aPlayer('Carlos Tapia','midfielder',20,'N/A'),
    new aPlayer('Marcelo Trobbiani','midfielder',21,'Calesita'), new aPlayer('Héctor Zelada','goalkeeper',22,'N/A')
];

//To make UI cards 
function cardsUI (array = allPlayers) {
    const cardsContainer = document.getElementById('wholeTeamCardsContainer');
    cardsContainer.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const cardsContainer = document.getElementById('wholeTeamCardsContainer');
        //const aCard = document.createElement('div');
        cardsContainer.innerHTML += `
        <div class = "playerCard">
            <p>${array[i].name}</p>
            <p>Position: ${array[i].position}</p>
            <p>Number: ${array[i].number}</p>
            <p>Nickname: ${array[i].nickname}</p>
        </div>
        `;
    }
    document.getElementById('showNbrPlayers').innerText = `All players: ${array.length}`;
}

cardsUI();

//globalVariables
const selectBtn = document.querySelector('select');

//To show cards according to user choice
const userResponse = (() => {

    const passedCondition = () => {
        let arr = [];
        switch(selectBtn.value) {
            case 'All Players':
                cardsUI(allPlayers);
            break;
        
            case 'Nicknames':
                cardsUI(allPlayers.filter(aCard => aCard.nickname !== 'N/A'));
            break;
        
            case 'Position Forward':
                cardsUI(allPlayers.filter(aCard => aCard.position === 'forward'));
            break;
        
            case 'Position Midfielder':
                cardsUI(allPlayers.filter(aCard => aCard.position === 'midfielder'));
            break;
        
            case 'Position Defender':
                cardsUI(allPlayers.filter(aCard => aCard.position === 'defender'));
            break;
        
            case 'Position Goalkeeper':
                cardsUI(allPlayers.filter(aCard => aCard.position === 'goalkeeper'));
            break;
        
            default:
                window.alert("Unexpected error! Please refresh the page.")
            break;
        }
    }
   return {passedCondition}
})()

selectBtn.addEventListener('change',userResponse.passedCondition);
