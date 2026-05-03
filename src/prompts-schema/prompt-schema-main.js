import chalk from 'chalk';

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1 - Gerar QR Code, 2 - Password)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas 1 ou 2"),
        required: true, 
    },
];

export default promptSchemaMain; 