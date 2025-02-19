require('dotenv').config();
const express = require('express');
const { obterMensagem } = require('./services'); // Importando a função

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos (HTML, CSS, JS frontend)
app.use(express.static('public'));

app.get('/api', (req, res) => {
    // para chamar uma função externa dentro de um endpoint, para realizar um serviço
    const resposta = obterMensagem(); // Chamando a função
    res.json(resposta);
    
    // res.json({ mensagem: 'Hello from API!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});