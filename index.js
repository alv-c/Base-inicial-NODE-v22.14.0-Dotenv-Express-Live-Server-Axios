require('dotenv').config();
const express = require('express');
// const axios = require('axios');
const { obterMensagemComAxios } = require('./services'); // Importando a função

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos (HTML, CSS, JS frontend)
app.use(express.static('public'));

app.get('/api', (req, res) => {
    // *********** para chamar uma função externa dentro de um endpoint, para realizar um serviço ***********

    // SEM AXIOS
    // const resposta = obterMensagemSemAxios(); // Chamando a função

    // COM AXIOS
    const resposta = obterMensagemComAxios().then(console.log).catch(console.error);


    res.json(resposta);
    // res.json({ mensagem: 'Hello from API!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});