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

(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);
})();
