const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("649592205811646524")
setInterval(function() {
channel.send(`levelup`);
}, 30)
})

client.login(process.env.BOT_TOKEN);