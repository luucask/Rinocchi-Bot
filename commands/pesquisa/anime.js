const request = require('node-superfetch');
const Discord = require("discord.js");
module.exports = {
    name: 'anime',
    aliases: ['animeinfo'],
    run: async (client, message, args, database) => {
   function shorten(text, maxLen = 2000) {
     return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
   }
   const query = args.join(' ');
   try {
     const { text } = await request
       .get('https://kitsu.io/api/edge/anime')
       .query({ 'filter[text]': query });
     const body = JSON.parse(text);
     if (!body.data.length) return message.reply('Não encontrei nenhum resultado, ou você não inseriu um anime válido.');
     const data = body.data[0].attributes;
     const embed = new Discord.MessageEmbed()
       .setColor(0xF75239)
       .setAuthor('Kitsu.io', 'https://i.imgur.com/lVqooyd.png', 'https://kitsu.io/explore/anime')
       .setURL(`https://kitsu.io/anime/${data.slug}`)
       .setThumbnail(data.posterImage ? data.posterImage.original : null)
       .setTitle(data.canonicalTitle)
       .setDescription(shorten(data.synopsis))
       .addField('❯ Tipo', `${data.showType} - ${data.status}`, true)
       .addField('❯ Episódios', data.episodeCount || '???', true)
       .addField('❯ Data de início', data.startDate ? new Date(data.startDate).toDateString() : '???', true)
       .addField('❯ Data de encerramento', data.endDate ? new Date(data.endDate).toDateString() : '???', true);
     return message.channel.send(embed);
   } catch (err) {
     return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
   }
 }
}
