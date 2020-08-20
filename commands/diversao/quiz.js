const { MessageEmbed } = require("discord.js");
const quiz = require('../data/quiz.json');
module.exports = {
    name: 'quiz',
    aliases: [],
    run: async (client, message, args) => {
   const item = quiz[Math.floor(Math.random() * quiz.length)];
   const filter = response => {
     return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
   };
   //embed
   const embed = new Discord.MessageEmbed()
     .setTitle('Quiz')
     .setDescription(`Pergunta:\n*${item.question}*`)
     .setColor('RANDOM')
   
   message.channel.send(embed).then(() => {
     message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
       .then(collected => {
         message.channel.send(`${collected.first().author} acertou!`);
       })
       .catch(collected => {
         message.channel.send('Ninguém respondeu a tempo.');
       });
   });
  }
}
