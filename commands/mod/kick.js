const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'kick',
    aliases: ['softban', 'expulsar'],
    run: async (client, message, args) => {
   if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("você não tem permissão para utilizar esse comando.")
  let user = message.mentions.users.first() || client.users.chache.get(args[0])
  if(message.author == user) return message.reply("você não pode expulsar você mesmo.")
    if(user){
    const member = message.guild.member(user);
    let motivo = args.slice(1).join(" ")
    if(!motivo || motivo.length < 1) motivo = "motivo não especificado"
   if(member){
     member
      .kick(`Por: ${message.author.tag} || Motivo: ${motivo}`).then(() => {
      let emb1 = new MessageEmbed()
      .setTitle('Kick')
      .setColor("GREEN")
      .setDescription(`Usuário ${user.tag} expulso com êxito.\nMotivo: ${motivo}`)
      message.channel.send(emb1)
    }).catch(err => {
      let emb2 = new MessageEmbed()
      .setTitle("Kick")
      .setColor("RED")
      .setDescription(`Não foi possível expulsar o usuário ${user.tag}.\nErro: ${err}`)
      message.channel.send(emb2)
    })
   } else {
    message.reply("este usuário não está neste servidor.")
   }
  } else {
    message.reply("você precisa mencionar um usuário válido.")
  }
 }
}
