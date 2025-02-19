require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos (HTML, CSS, JS frontend)
app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.json({ mensagem: 'Hello from API!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});