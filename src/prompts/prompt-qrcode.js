import chalk from 'chalk';

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR Code"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha o tipo do QR Code (1 - NORMAL, 2 - TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas 1 ou 2"),
        required: true,
    }, 
];

export default promptQRCode;