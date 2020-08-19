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
message.channel.send("Oi".then(msg => {
    msg.react("✅")
});
```
> E então, iremos criar o filtro, que saberá quem clicou na reação:

```javascript
message.channel.send("Oi".then(msg => {
    msg.react("✅")
    let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
});
```
*Nesse filtro ele vai basicamente responder a apenas uma menção e apenas quando o autor da mensagem reagir, ele irá realizar determinada função.*


