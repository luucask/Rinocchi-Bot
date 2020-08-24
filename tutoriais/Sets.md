# Sets

## O que é um Set?
 `Set` é um objeto em javascript que permite que você armazene valores de qualquer tipo.

> Set
```javascript
 var SetName = new Set()
```

### Adicionando informações a um `Set`:
 Adicionar informações em um Set é bem simples:

```javascript
 var SetName = new Set()
 SetName.add(1)
```
#### Adicionando várias informações e textos:

```javascript
 var SetName = new Set()
 SetName.add(1)
 SetName.add(200)
 SetName.add("texto")
```

### `.has`
 O `.has` serve para verificarmos se há determinado valor dentro do `Set`

```javascript
 var SetName = new Set()
 SetName.add(1)
 SetName.add(200)
 SetName.add("texto")

 //Has
 SetName.has(1) //sim
 SetName.has("texto") //sim
```

### Deletando as informações:

```javascript
 var SetName = new Set()
 SetName.add(1)
 SetName.add(200)
 SetName.add("texto")

 //Has
 SetName.has(1) //sim
 SetName.has("texto") //sim

 // Delete
 SetName.delete(200)

 //Log
 console.log(SetName)
```
*Retorna: "texto", 1, ~~200~~*

 Esse são exemplos básicos, você pode ler mais em [Developer.Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set)

## Exemplos: Delay
 Para colocar uma limitação de usos por um determinado período usando um `Set` é bem simples:

```javascript
  const MSet = new Set() // isso deve ficar no topo do código, não dentro de qualquer função.
  if (MSet.has(message.author.id)){
  return message.reply("você está executando os comandos rápido de mais!")
  } else {
  MSet.add(message.author.id)
  }
  setTimeout(() => {
  MSet.delete(message.author.id)
  }, tempo em milissegundos)
```
 Esse é um exemplo de cooldown para comandos que você pode usar diretamente no `client.on('message')` ou em apenas comandos específicos.
