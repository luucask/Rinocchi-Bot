module.exports = (client) => {
  const status = [
   { name: "Nome da presence", type: 'Tipos'},
   { name: "Presence da Twitch", type: 'STREAMING' , url: 'https://twitch.tv/'}
    ]
    // Tipos de presence
    /* 
    PLAYING : jogando
    STREAMING : Transmitindo
    WATCHING : Assistindo
    LISTENING : ouvindo
    */
  function Presence() {
    const base = status[Math.floor(Math.random() * status.length)]
    client.user.setActivity(base)
  }
  Presence();
  setInterval(() => Presence(), 12000)
}
