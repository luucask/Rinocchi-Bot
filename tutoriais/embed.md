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
 O Resultado seria algo como isso:
![Emb](https://cdn.discordapp.com/attachments/554842584757829645/745758333016997938/Screenshot_20200819-183525.png)

### Formatação de texto:
 A formatação de texto é bem similar aos textos que você envia como usuário, por exemplo, negrito com as `*`, blocos com crases, etc.
#### Pulando linhas:
 Para pular linhas, não podemos simplesmente apertar o enter, porque resultará em um erro. Para pularmos uma linha, devemos colocar `\n` onde a linha deve ser pulada.
![emb](https://cdn.discordapp.com/attachments/554842584757829645/745760532715536514/Screenshot_20200819-184410.png)

### Variáveis:
 É possível escrever o valor se uma variável de duas maneiras:
> **1° maneira:**
```javascript
const Discord = require("discord.js");
let Valor = 200
//Embed
let embed = new Discord.MessageEmbed()
.setTitle("Título")
.setDescription("Valor" + Valor)
.setColor("RANDOM")
```
*Resultado:*
![Emb](https://cdn.discordapp.com/attachments/554842584757829645/745761802884874320/Screenshot_20200819-184913.png)

> **2° maneira:**
```javascript
const Discord = require("discord.js");
let Valor = 200
//Embed
let embed = new Discord.MessageEmbed()
.setTitle("Título")
.setDescription(`Valor é ${Valor}`)
.setColor("RANDOM")
```
*Resultado:*
![Emb](https://cdn.discordapp.com/attachments/554842584757829645/745762659454025738/Screenshot_20200819-185237.png)

> Como podemos notar, não há uma diferença tão grande, eu sinceramente prefiro utilizar  `${}`, mas isso depende de você.

### .set:
 Há várias "terminações", implementando cada vez mais sua embed:

> Lista dos elementos de uma embed:


.set & add   | Info | Texto
------------ | ------------- | -------------
.setTitle | Adiciona um título | `('')` ou `(``)` ou uma variável
.setDescription | Descrição, texto que vem abaixo do título | `('')` ou `(``)` ou uma variável
.setColor | Define uma cor para a borda do embed | Pode ser o nome da cor em inglês e em caps ou em HEX, você também pode usar `RANDOM`, `(``)` ou `('')`
.setFooter | Rodapé da embed | `('')` ou `(``)` ou uma variável, para adicionar ícones: `('', img_url)` ou `(`` , img_url)` ou uma variáve
.setImage | Imagem principal da embed | `('')` ou `(``)` ou uma variável
.setThumbinail | Imagem menor no canto superior direito | `('')` ou `(``)` ou uma variável
.setAuthor | Autor, acima do título | `('' , img_url)` ou `(``, img_url)` *[img_url pode ser uma variável]*
.addField | Adiciona um campo | `('texto 1', 'texto 2')` ou `(`texto1`, `texto 2`)` *[o texto 1 ou o 2 podem ser variáveis]*
.setURL | Ao clicar na embed, redireciona o usuário a algum site | `('')` ou `(``)`


### Mais usos da embed
[🔗 Coletores](https://github.com/CloudyyUw/Rinocchi-Bot/blob/master/tutoriais/coletores.md)
