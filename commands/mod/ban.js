const Discord = require("discord.js");
module.exports = {
    name: 'ban',
    aliases: ['banir'],
    run: async (client, message, args) => {
   if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Você não possui permissão para utilizar esse comando!`)
   let user = message.mentions.users.first() || client.users.cache.get(args[0])
   if (user == message.author) {
     message.channel.send('Você não pode banir você mesmo.')
     return
   }
   if (user) {
     const member = message.guild.member(user);
     if (member) {
       let motivo = args.slice(1).join(" ")
       let embed = new Discord.MessageEmbed()
         .setTitle('Ban / Confirmação:')
         .setColor('WHITE')
         .setDescription(`Você deseja mesmo banir o usuário ${user}, motivo ${motivo} ?`)
       message.channel.send(`${message.author}`, embed).then(msg => {
         msg.react("🆗")
         let filtro = (reaction, usuario) =>
           reaction.emoji.name === "🆗" && usuario.id === message.author.id;
         let coletor = msg.createReactionCollector(filtro, { max: 1 });
   
         coletor.on("collect", cp => {
           member
             .ban({
               reason: `Por: ${message.author.tag} | Motivo: ${motivo}`,
             })
             .then(() => {
               let emb = new Discord.MessageEmbed()
                 .setTitle('Ban')
                 .setColor('RED')
                 .setDescription(`${user.tag} banido com êxito. Motivo: ${motivo}`)
               message.channel.send(emb)
             })
             .catch(err => {
               message.reply('Eu não posso banir esse usuário, verifique a posição dos cargos.');
             });
         });
       })
     } else {
       message.channel.send('Este usuário não está neste Servidor.')
     }
   } else {
     message.channel.send('Você precisa mencionar ou inserir o ID do usuário.')
   }
  }
}
