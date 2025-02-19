function obterMensagem() {
    return { mensagem: "Serviço externo chamado dentro do endpoint!" };
}

module.exports = { obterMensagem };