const firebase = require("firebase");
module.exports = async (client, message) => {
  var configF = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(configF);
  }
  const database = firebase.database();
  database.ref(`Servidores/Prefixo/${message.guild.id}`).once('value').then(async function(db) {
    if (db.val() == null) {
      database.ref(`Servidores/Prefixo/${message.guild.id}`)
        .set({
          prefixo: 'r?'
        })
      message.reply("execute o comando novamente.")
      return
    }
    let prefix = db.val().prefixo
    //caso não for utilizar o Firebase, deixe:
    // let prefix = 'prefixo'
    if (message.channel.type == 'dm') return
    if (message.content.startsWith(`<@${client.user.id}>`)) {
      return message.reply(`Meu prefixo neste servidor é **${prefix}**, use o comando **cmds** para a lista de comandos`)
    }

    if (!message.content.toLowerCase().startsWith(prefix)) return;
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g)

    let cmd = args.shift().toLowerCase()
    if (cmd.length === 0) return;

    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd))
    if (command) command.run(client, message, args, database) //exportando a database para usar em outros comandos

    if (!command) return message.reply(`eu não consegui encontrar o comando **${cmd}**.`)
  });
};
