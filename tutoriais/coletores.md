# Coletores
 Na livraria discord.js, nós temos dois tipos de coletores: o de mensagens e de reações.

## ReactionCollector
 O coletor de reações é simples de usar, ele só precisa de uma mensagem, uma reação e um filtro.

### Código:
> Primeiro, vamos enviar uma mensagem, e é ela que terá as reações:

```javascript
message.channel.send("Oi")
```

> Agora vamos usar a função `then` para "nomear" a mensagem. Vamos chamá-la de `msg`

```javascript
message.channel.send("Oi").then(msg => {
});
```

> E depois iremos adicionar as reações que queremos na mensagem:

```javascript
message.channel.send("Oi").then(msg => {
    msg.react("✅")
});
```
> E então, iremos criar o filtro, que saberá quem clicou na reação:

```javascript
message.channel.send("Oi").then(msg => {
    msg.react("✅")
    let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
});
```
*Nesse filtro ele vai basicamente responder a apenas uma reação e apenas quando o autor da mensagem reagir, ele irá realizar determinada função.*

> Depois, iremos criar o coletor, usando o filtro:

```javascript
message.channel.send("Oi").then(msg => {
    msg.react("✅")
    let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
    let coletor = msg.createReactionCollector(filtro, { max: 1 });
});
```

> Executando a ação quando esse coletor se ativar:

```javascript
message.channel.send("Oi").then(msg => {
    msg.react("✅")
    let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
    let coletor = msg.createReactionCollector(filtro, { max: 1 });
    coletor.on("collect", cp => {
       msg.edit("Funcionou!!! 🎉🎉🎉")
  });
});
```
*Depois do usuário reagir, ele irá editar a mensagem.*

### Posso usar em embeds??
 Sim, você pode. O método é o mesmo, mas eu irei demostrar, pois algumas pessoas sempre tem dúvidas sobre o uso correto:

```javascript
const Discord = require("discord.js");
let embed = new Discord.MessageEmbed()
.setTitle('Embed 1")
//Enviamos a embed
message.channel.send(embed).then(msg => {
    msg.react("✅")
    let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
    let coletor = msg.createReactionCollector(filtro, { max: 1 });
    coletor.on("collect", cp => {
       let embed2 = new Discord.MessageEmbed()
       .setTitle("Esse é o embed 2")
       msg.edit(embed2)
  });
});
```

### ⚠️ Aviso:
> Você deve ficar atento se a mensagem que vai ser enviada/editada depois do usuário reagir **deve ficar dentro dos `({})` do coletor.**

### Emojis customizados nas reações:
 Assim como nas mensagens embed e comum, precisamos do **ID do emoji**, só que nos coletores tem uma "pegadinha".

##### Recapitulando...
 Os IDs de emojis Discord são códigos assim: 
```javascript
<a:triggered:736337095655948318>
```
 ![emoji](https://cdn.discordapp.com/attachments/724803884173754399/745774179285991444/triggered.gif)

### Diferença:


