const Discord = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: 'hex',
    aliases: ['hexcolor'],
    run: async (client, message, args) => {
   if (!args[0] || args[0] === 'help') return message.reply("Forneça um código hexadecimal válido, sem o #")
   var isOk = /^[0-9A-F]{6}$/i.test(args[0])
   if (isOk === false) return message.reply("Forneça um código hexadecimal válido, sem o #")
   
   const { body } = await superagent
     .get(`https://api.alexflipnote.dev/color/` + args[0]);
   
   const embed = new Discord.MessageEmbed()
     .setColor(`#${args[0]}`)
     .setTitle(body.name)
     .setDescription("Hex: " + body.hex + '\n' + "RGB: " + body.rgb)
     .setImage(body.image)
     .setFooter(``);
   message.channel.send({ embed });
 }
}
