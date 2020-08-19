# Embeds

### O que são embeds?
 Embeds são aquelas mensagens dentro de uma caixa, com uma borda colorida (definição superficial, mas é basicamente isso).
 São mensagens enviadas por Bots ou Webhooks (outro assunto).

*Um exemplo de uma embed*
![Emb](https://cdn.discordapp.com/attachments/554842584757829645/745747853317767248/Screenshot_20200819-175345.png)

### Embeds Discord.js
 Os embeds mudam dependendo da versão, por exemplo na **v11** era `new Discord.RichEmbed()` e atualmente, na **v12** é `new Discord.MessageEmbed()`

## Estruturando uma embed
 ### Estrutura básica de uma embed:
```javascript
const Discord = require("discord.js");
//Carregamos a livraria
//Agora construimos uma embed
let embed = new Discord.MessageEmbed()
.setTitle('Oi, eu sou um título')
.setDescription('Eu também tenho uma descrição!')
.setColor("RANDOM")
.setFooter("também tenho um rodapé")
```
