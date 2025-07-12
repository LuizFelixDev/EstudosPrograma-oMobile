const player1 = {
    NOME: "Luigi",
    MANOBRABILIDADE: 4,
    VELOCIDADE: 3,
    PODER: 4,
};

const player2 = {
    NOME: "Donkey Kong",
    MANOBRABILIDADE: 2,
    VELOCIDADE: 2,
    PODER: 5,
};

async function rollDice(){
    return Math.floor(Math.random() * 6)+ 1; 
};

async function getRandomBlock(){
    let random = Math.floor(Math.random() * 3) +1;
    let result 

    switch(true){
        case random == 1:
            result = "RETA"
            break;
        case random == 2:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    };

    return result;
}

async function playRaceEngine(character1, character2){
    for(let i=1; i<6; i++){
        console.log(`🏁 Rodada ${i}`);
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
    };
};



(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);

    await playRaceEngine(player1, player2);
})();
