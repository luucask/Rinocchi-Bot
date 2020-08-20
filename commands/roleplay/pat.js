const Discord = require("discord.js");
const superagent = require("superagent")
module.exports = {
    name: 'pat',
    aliases: ['headpat' , 'afago', 'afagar'],
    run: async (client, message, args) => {
  if (!message.mentions.users.first()) return message.reply("Você precisa mencionar alguém.");
  const { body } = await superagent
    .get("https://nekos.life/api/pat");
  
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username} afagou ${message.mentions.users.first().username}`)
    .setImage(body.url)
  message.channel.send({ embed })
 }
}
