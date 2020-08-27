const { MessageEmbed }= require("discord.js");
const ms = require('ms');
module.exports = {
  name: 'giveaway',
  aliases: ['sorteio'],
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Você não possui permissão para utilizar esse comando!`);
    
    if (!args[0]) return message.channel.send(`Você precisa especificar o tempo!\n Ex.:\n\`5m || 7h || 10d\``);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `Você não está usando o tempo da forma correta!`
      );
    if (isNaN(args[0][0])) return message.channel.send(`Isso não é um número!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Você precisa informar o canal ou eu não consegui achar esse canal nesse servidor.`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Especifique o prêmio!`);
    message.channel.send(`*Giveaway criado em ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`Giveaway`)
      .setDescription(
        `${message.author} iniciou um giveaway!\n Prêmio:\n **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`RANDOM`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Não foi possível definir o ganahdor pois não houve reações o suficiente.`
        );
      }
    
      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `O ganhador do prêmio **${prize}** é... ${winner}`
      );
    }, ms(args[0]));
  }
}
