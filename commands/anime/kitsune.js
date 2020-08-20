const Discord = require("discord.js")
const superagent = require('superagent');
module.exports = {
    name: 'kitsune',
    aliases: ['foxgirl'],
    run: async (client, message, args) => {
   const { body } = await superagent
     .get("https://nekos.life/api/v2/img/fox_girl");
   
   const embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle(`Fox Girl`)
     .setImage(body.url)
   message.channel.send({ embed })
 }
}
