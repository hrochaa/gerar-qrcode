import prompt from 'prompt'
import PromptSchemaQRCode from './prompts-schema/prompt-schema-qrcode.js'
import handle from './services/qr-code/handle.js'
import createQRCode from './services/qr-code/create.js'
import createPassword from './services/password/create.js'
import promptSchemaMain from './prompts-schema/prompt-schema-main.js'

async function main() {
    prompt.start();

    prompt.get(promptSchemaMain, async (err, choose) => {
        if (err) console.log(err);

        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassword();
    });

    prompt.start();
}

main();