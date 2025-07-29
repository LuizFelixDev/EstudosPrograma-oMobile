const player1 = {
    NOME: "Luigi",
    MANOBRABILIDADE: 4,
    VELOCIDADE: 3,
    PODER: 4,
    PONTOS: 0,
};

const player2 = {
    NOME: "Donkey Kong",
    MANOBRABILIDADE: 2,
    VELOCIDADE: 2,
    PODER: 5,
    PONTOS: 0,
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

async function logRollResult(playerName, block, diceResult, atribute){
    console.log(`${playerName} 🎲 Rolou um dado ${block} ${diceResult} + ${atribute} = ${diceResult + atribute}`);
};

async function playRaceEngine(character1, character2){
    for(let i=1; i<6; i++){
        console.log(`🏁 Rodada ${i}`);
        // Sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        let diceResult1 = await rollDice();    
        let diceResult2 = await rollDice();

        //Testar abilidade
        let testSkill1 = 0;
        let testSkill2 = 0;

        if(block == "RETA"){
            testSkill1 = diceResult1 + player1.VELOCIDADE;
            testSkill2 = diceResult2 + player2.VELOCIDADE;

            await logRollResult(player1.NOME, "velocidade", diceResult1, player1.VELOCIDADE);
            await logRollResult(player2.NOME, "velocidade", diceResult2, player2.VELOCIDADE);
        };
        if(block == "CURVA"){
            testSkill1 = diceResult1 + player1.MANOBRABILIDADE;
            testSkill2 = diceResult2 + player2.MANOBRABILIDADE;

            await logRollResult(player1.NOME, "manobrabilidade", diceResult1, player1.MANOBRABILIDADE);
            await logRollResult(player2.NOME, "manobrabilidade", diceResult2, player2.MANOBRABILIDADE);
        };
        if(block == "CONFRONTO"){
            let powerResult1 = diceResult1 + player1.PODER;
            let powerResult2 = diceResult2 + player2.PODER;

            console.log(`${player1.NOME} confrontou com ${character2.NOME}🥊`);

            await logRollResult(player1.NOME, "poder", diceResult1, player1.MANOBRABILIDADE);
            await logRollResult(player2.NOME, "poder", diceResult2, player2.MANOBRABILIDADE);


            if(powerResult1 > powerResult2 && player2.PONTOS > 0){
                console.log(`${player1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`);
                player2.PONTOS--;
            };
            if(powerResult2 > powerResult1 && player1.PONTOS > 0){
                console.log(`${player2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`);
                player1.PONTOS--;
            };
            if(powerResult1 === powerResult2){
                console.log(`Confronto empatado! Nenhum ponto perdido`)
            };
        };
        if(testSkill1 > testSkill2){
            console.log(`${player1.NOME} marcou um ponto!`);
            player1.PONTOS++;
        }else if(testSkill2 > testSkill1){
            console.log(`${player2.NOME} marcou um ponto`);
            player2.PONTOS++;
        };
        console.log("===============================================")
        
    };
};

async function declareWinner(player1, player2){
 console.log("Resultado final:");
 console.log(`${player1.NOME}: ${player1.PONTOS} pontos(s)`);
 console.log(`${player2.NOME}: ${player2.PONTOS} pontos(s)`);

 if(player1.PONTOS > player2.PONTOS){
    console.log(`${player1.NOME} venceu a corrida🏆`);
 } else if(player2.PONTOS > player1.PONTOS){
    console.log(`${player2.NOME} venceu a corrida🏆`);
 } else {
    console.log("A corrida terminou em empate!")
 }
};

(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();
