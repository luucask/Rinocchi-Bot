const Discord = require("discord.js")
const randomPuppy = require('random-puppy');
module.exports = {
  name: 'moe',
  aliases: ['moe'],
  run: async (client, message, args) => {
  randomPuppy('awwnime')
    .then(url => {
      const embed = new Discord.MessageEmbed()
        .setImage(url)
        .setColor('RANDOM')
      return message.channel.send({ embed });
    })
  }
}
