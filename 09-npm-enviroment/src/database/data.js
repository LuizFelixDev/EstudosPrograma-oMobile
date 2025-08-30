

async function connectToDataBase(user, password){
    if(user === process.env.USER && password === process.env.PASSWORD){
        console.log("Conexão estabelecida com sucesso!");
    }else{
        console.log("Falha de login, não foi possível se conectar ao banco de dados!")
    };
};

export {
    connectToDataBase,
}