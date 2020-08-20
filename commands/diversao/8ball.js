const Discord = require("discord.js");
module.exports = {
  name: '8ball',
  aliases: ['8', 'ball', '8b'],
  run: async (client, message, args) => {
    if (!args[0]) return message.reply("Por favor, faça uma pergunta.");
    let replies = [
            'Talvez',
    	    'Certamente sim',
    	    'Eu espero que sim',
    	    'Nem em seu sonho mais selvagem',
        	'Há uma boa chance',
        	'Eu acho que sim',
        	'Eu espero que não',
        	'Nunca!',
    	    'Desculpa, mas...',
        	'Bem, sim',
        	'O futuro é sombrio..',
    	    'Não há certezas no futuro',
        	'Quem liga?',
        	'Provavelmente',
        	'Há uma chance pequena',
        	'Sim!',
        	'Há uma alta probabilidade',
        	'Me desculpe mas, que diferença isso vai fazer?',
        	'Espero que não seja meu problema'
        ];
    
    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");
    
    let embed = new Discord.MessageEmbed()
      .setTitle("8ball")
      .setColor("RANDOM")
      .addField("Pergunta:", question)
      .addField("Resposta:", replies[result])
    message.channel.send({ embed });
  }
}
