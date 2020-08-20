const { MessageEmbed } = require("discord.js")
module.exports = {
  name: 'addemoji',
  aliases: ['adicinaremoji'],
  run: (client, message, args) => {
    if (!message.guild.me.hasPermission('MANAGE_EMOJIS')) return message.reply(`eu não tenho permissão para gerenciar emojis`)
    if (!message.member.hasPermission('MANAGE_EMOJIS')) return message.reply(`você não tem permissão de gerenciar emojis`)

    if (!args[0]) return message.reply(`insira o nome do emoji.`)
    if (!args[1]) return message.reply(`insira o url do emoji.`)

    try {
      message.guild.emojis.create(args[1], args[0]).then(emoji => {
        message.channel.send(`**Emoji criado**\nPreview: ${emoji}`)
      })
    } catch (err) {
     return message.channel.send(`${err}`)
    }
  }
}
