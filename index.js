const dotenv = require('dotenv').config();
const commando = require('discord.js-commando');
const path = require('path');
const bot = new commando.Client();


bot.registry
    .registerGroup('random', 'Random')
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, "commands"));


bot.on('message', (message) => {
    if (message.content.includes('ping')) {
        message.channel.sendMessage('pong');
    }
    console.log(message.author.username + " " + message.content)
});

bot.login(process.env.KEY).then((result) => {
    console.log('Bot Running');
})