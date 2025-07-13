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


// Sortear blocos
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
        // Sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
    };

    //Rolar dado
    let diceResult1 = await rollDice();    
    let diceResult2 = await rollDice();

    //Testar abilidade
    let testSkill1 = 0;
    let testSkill2 = 0;

    if(block == "RETA"){
        testSkill1 = rollDice + player1.VELOCIDADE;
        testSkill2 = rollDice + player2.VELOCIDADE;
    };
    if(block == "CURVA"){
        testSkill1 = rollDice + player1.MANOBRABILIDADE;
        testSkill2 = rollDice + player2.MANOBRABILIDADE;
    };
    if(block == "CONFRONTO"){
        testSkill1 = rollDice + player1.PODER;
        testSkill2 = rollDice + player2.PODER;
    };
};



(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);

    await playRaceEngine(player1, player2);
})();
