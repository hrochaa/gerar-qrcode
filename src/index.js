import prompt from 'prompt'
import mainPrompt from './prompts/prompt-main.js'

async function main() {
    prompt.start();

    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1) console.log("escolheu o qrcode");
        if(choose.select == 2) console.log("escolheu o password");
    });
}

main();