
module.exports = {
    botName: "MyWhatsAppBot",
    ownerNumber: "1234567890", // Your WhatsApp number
    prefix: "!", // Command prefix
    sessionPath: "./session.json", // Session file path

    // WhatsApp Bot Functions
    getGreetingMessage: function (name) {
        return `Hello, ${name}! Welcome to MyWhatsAppBot. How can I assist you today?`;
    },

    getHelpMessage: function () {
        return `Available Commands:
        - !help: Show this help message
        - !info: Get bot information
        - !time: Get current time
        - !owner: Contact the bot owner`;
    },

    getBotInfo: function () {
        return {
            name: "MyWhatsAppBot",
            version: "1.0.0",
            developer: "Your Name",
            github: "https://github.com/your-repo",
        };
    },

    getCurrentTime: function () {
        return `Current Time: ${new Date().toLocaleString()}`;
    },

    getOwnerContact: function () {
        return `Bot Owner: +1234567890\nContact via WhatsApp.`;
    }
};
