const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const welcome = require('./features/welcome');
const nightowl = require('./features/nightowl');
const chatbot = require('./features/chatbot');
const messageCount = require('./features/message-count');
const mongo = require('./util/mongo');

const fs = require('fs');
const { Mongoose } = require('mongoose');
const messageCountSchema = require('./schemas/message-count-schema');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.on('ready', async () => {
    console.log('Maio starts...');

    welcome(client);
    messageCount(client);
    chatbot(client);
    nightowl(client);

    await mongo().then(mongoose => {
        try {
            console.log('Maio is ready!');
        } finally {
            mongoose.connection.close();
        }
    })
});

client.login(config.token);