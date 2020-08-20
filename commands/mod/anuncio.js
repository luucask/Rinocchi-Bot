const Discord = require("discord.js");
module.exports = {
    name: 'anuncio',
    aliases: [''],
    run: async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Você não possui permissão para utilizar esse comando!`)
   
   message.channel.send(`Em qual canal a mensagem deve ser enviada?`).then(msg => {
     let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 })
       .on('collect', c => {
         canal = c.mentions.channels.first()
         if (!canal) {
           message.reply(`Mencione um canal!`)
         } else {
           message.channel.send(`Qual a mensagem desse anuncio?`).then(msg2 => {
             let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 })
               .on('collect', c => {
                 desc = c.content
   
                 message.channel.send(`Por favor, informe o título.`).then(msg3 => {
                   let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 })
                     .on('collect', c => {
                       title = c.content
   
                       message.channel.send(`Enviado ao canal ${canal} com êxito!`)
   
                       let embed = new Discord.MessageEmbed()
   
                         .setColor('PURPLE')
                         .setFooter(`Por: ${message.author.username}`, message.author.avatarURL)
                         .setTitle(title)
                         .setDescription(desc)
   
                       canal.send(`@everyone`, embed)
   
                     })
                 })
               })
           })
         }
       })
   })    
  }
}
