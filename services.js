function obterMensagemSemAxios() {
    return { mensagem: "Serviço externo chamado dentro do endpoint!" };
}

async function obterMensagemComAxios() {
    try {
        const response = await axios.get(apiUrl, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        return { mensagem: `Dados recebidos: ${response.data}` }
    } catch (error) {
        return { mensagem: `Erro teste ao buscar dados: ${error.message}` }
    }
}

module.exports = { obterMensagemComAxios };