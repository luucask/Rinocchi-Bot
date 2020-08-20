module.exports = {
  name: 'ping',
  aliases: ['latencia', 'ms'],
  run: async (client, message, args) => {
    const envio = await message.channel.send(`Ping...`)
    envio.edit(`Latência: **${parseInt(envio.createdAt - message.createdAt)} ms**\nAPI: **${parseInt(client.ws.ping)} ms**`)
  }
}
