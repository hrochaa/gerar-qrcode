const mainPrompt = [
    {
        name: "select",
        description: "Escolha a ferramenta (1 - Gerar QR Code, 2 - Password)",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas 1 ou 2",
        required: true, 
    },
];

export default mainPrompt; 