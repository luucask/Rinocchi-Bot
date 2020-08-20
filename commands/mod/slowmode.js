const { MessageEmbed, Discord } = require("discord.js");
module.exports = {
  name: 'say',
  aliases: ['falar'],
  run: async (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      message.reply("você não tem permissão para executar esse comando.");
      return
    } else {
     const sayMessage = args.join(" ");
     message.delete().catch(O_o => {});
     message.channel.send(sayMessage);
    }
  }
}
