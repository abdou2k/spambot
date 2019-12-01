const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("650696226748235798")
setInterval(function() {
channel.send(`levelup`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
