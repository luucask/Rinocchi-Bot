module.exports = {
  name: 'clear',
  aliases: ['limpar' , 'purge'],
  run: async (client, message, args) => {
   if (!message.member.permissions.has("MANAGE_MESSAGES"))
     return message.reply(
       "você precisa da permissão `Gerenciar menssagens` para executar esse comandos! "
     );
   const deleteCount = parseInt(args[0], 10);
   if (!deleteCount || deleteCount < 1 || deleteCount > 100)
     return message.reply(
       ":x: | Você precisa informar uma quantidade de menssagens, de `1` menssagem a `100` menssagens!"
     );
   
   const fetched = await message.channel.messages.fetch({
     limit: deleteCount + 1
   });
   message.channel.bulkDelete(fetched);
   message.channel
     .send(`${args[0]} mensagens limpas.`)
     .catch(error =>
       console.log(`Não foi possível deletar mensagens devido a: ${error}`)
     );
  }
}
