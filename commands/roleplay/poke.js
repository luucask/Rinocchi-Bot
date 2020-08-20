const Discord = require("discord.js");
const superagent = require("superagent")
module.exports = {
  name: 'poke',
  aliases: ['cutucar'],
  run: async (client, message, args) => {
    if (!message.mentions.users.first()) return message.reply("Você precisa mencionar alguém.")
    const { body } = await superagent
      .get("https://nekos.life/api/v2/img/poke");

    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${message.author.username} cutucou ${message.mentions.users.first().username}`)
      .setImage(body.url)
    message.channel.send({ embed })
  }
}
