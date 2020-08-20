const Discord = require("discord.js");
const superagent = require("superagent")
module.exports = {
    name: 'kiss',
    aliases: ['beijar'],
    run: async (client, message, args) => {
     if (!message.mentions.users.first()) return message.reply("Você precisa mencionar alguém.");
     const { body } = await superagent
       .get("https://nekos.life/api/kiss");
   
     const embed = new Discord.MessageEmbed()
       .setColor("PINK")
       .setTitle(`${message.author.username} beijou ${message.mentions.users.first().username}`)
       .setImage(body.url)
     message.channel.send({ embed })
 }
}
