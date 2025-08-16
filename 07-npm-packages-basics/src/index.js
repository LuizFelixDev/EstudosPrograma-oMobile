const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client();

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
    console.log("Bot pronto!");

    const numero = "iouihiuiu"; 

    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            client.sendMessage(
                numero, 
                `Essa foi mandada automaticamente usando NodeJS 🚀, só pra vc ver que seu sei programar em javaScript)`
            )
            .then(() => console.log(`Mensagem ${i + 1} enviada!`))
            .catch(err => console.error("Erro ao enviar:", err));
        }, 120000); 
    }
});

client.initialize();
