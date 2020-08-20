const Discord = require("discord.js");
const superagent = require("superagent")
module.exports = {
    name: 'slap',
    aliases: ['tapa'],
    run: async (client, message, args) => {
   if (!message.mentions.users.first()) return message.reply("Você precisa mencionar alguém.");
   
   const { body } = await superagent
     .get("https://nekos.life/api/v2/img/slap");
   
   const embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle(`${message.mentions.users.first().username} levou um tapa de ${message.author.username}`)
     .setImage(body.url)
   message.channel.send({ embed })
 }
}
