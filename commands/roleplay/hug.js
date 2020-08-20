const Discord = require("discord.js");
const superagent = require("superagent")
module.exports = {
    name: 'hug',
    aliases: ['abaraco', 'abracar', 'abraço', 'abraçar'],
    run: async (client, message, args) => {
   if (!message.mentions.users.first()) return message.reply("Você precisa mencionar alguém.");
   const { body } = await superagent
     .get("https://nekos.life/api/hug");
   
   const embed = new Discord.MessageEmbed()
     .setColor("#ff9900")
     .setTitle(`${message.author.username} abraçou ${message.mentions.users.first().username}`)
     .setImage(body.url)
   message.channel.send({ embed })
 }
}
