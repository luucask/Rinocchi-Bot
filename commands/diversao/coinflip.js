module.exports = {
  name: 'coinflip',
  aliases: [],
  run: async (client, message, args) => {
    let random = (Math.floor(Math.random() * Math.floor(2)));
    if (random === 0) {
      message.channel.send('**A moeda caiu em:** `Cara`!');
    }
    else {
      message.channel.send('**A moeda caiu em:** `Coroa!`');
    }
  }
}
