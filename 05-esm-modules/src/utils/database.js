const databaseType = {
    userType: "admim",
    typeData: "datalocal",
};

async function connectDatabase(dataBase){
    // lógica de conexão
    console.log("conectado ao banco " + dataBase);
};

async function disconnectDatabase(){
    console.log("desconectando do banco de dados");
};

export {
    connectDatabase, disconnectDatabase, databaseType
};