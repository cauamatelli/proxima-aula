const express = require('express');
const http = require('http');


//inicializar aplicação express
const app = express();
const server = http.createServer(app);

//inicia conexoes
const inicializar = async () => {
    try{
        const PORT = 3000
        server.listen(PORT, () => {
            console.log(`servidor rodando na porta ${PORT}`);

        });
    } catch (error) {
        console.error('erro ao inicializar o servidor', error);
    }
};

//executar o inicializador
inicializar();

//exportar os modulos app, server
module.exports = {app,server};