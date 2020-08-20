const Discord = require("discord.js")
module.exports = {
  name: 'avatar',
  aliases: [],
  run: async (client, message, args) => {
   let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

   let avatar = user.avatarURL({ dynamic: true, format: 'png', size: 1024 });

   //embed
   let embed = new Discord.MessageEmbed()
     .setTitle('🖼️ | Avatar')
     .setColor('RANDOM')
     .setDescription(`📥 | [Clique aqui](${avatar})`)
     .setImage(avatar)
   await message.channel.send(embed);
  }
}
