const Discord = require("discord.js")
const superagent = require('superagent');
module.exports = {
    name: 'neko',
    aliases: ['catgirl'],
    run: async (client, message, args) => {
   const { body } = await superagent
     .get("https://nekos.life/api/neko");
   link = body.neko;
   
   const embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle("Neko")
     .setImage(body.neko)
   message.channel.send({ embed })
 }
}
