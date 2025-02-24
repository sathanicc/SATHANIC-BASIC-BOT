const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth()
});

// Generate QR Code for authentication
client.on('qr', qr => {
    console.log('Scan this QR code to log in:');
    qrcode.generate(qr, { small: true });
});

// Confirm successful login
client.on('ready', () => {
    console.log('WhatsApp bot is ready!');
});

// Listen for incoming messages
client.on('message', async message => {
    console.log(`Received message: ${message.body}`);

    if (message.body.toLowerCase() === 'hello') {
        message.reply('Hello! How can I assist you?');
    } else if (message.body.toLowerCase() === 'bye') {
        message.reply('Goodbye! Have a great day!');
    }
});

// Start the bot
client.initialize();
