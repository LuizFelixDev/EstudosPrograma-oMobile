const player1 = {
    NOME: "Mario",
    MANOBRABILIDADE: 3,
    VELOCIDADE: 4,
    PODER: 3,
};

const player2 = {
    NOME: "Luigi",
    MANOBRABILIDADE: 4,
    VELOCIDADE: 3,
    PODER: 4,
};

const player3 = {
    NOME: "Bowser",
    MANOBRABILIDADE: 2,
    VELOCIDADE: 5,
    PODER: 5,
};

const player4 = {
    NOME: "Peach",
    MANOBRABILIDADE: 4,
    VELOCIDADE: 3,
    PODER: 2,
};

const player5 = {
    NOME: "Yoshi",
    MANOBRABILIDADE: 4,
    VELOCIDADE: 2,
    PODER: 3,
};

const player6 = {
    NOME: "Donkey Kong",
    MANOBRABILIDADE: 2,
    VELOCIDADE: 2,
    PODER: 5,
};

async function rollDice(){
    Math.floor(Math.random() * 6)+ 1; 
};

(async function main(){
    console.log("hello");
})();
