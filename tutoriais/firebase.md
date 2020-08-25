# Firebase

 Firebase é um banco de dados em nuvem para javascript e NodeJs Client.

 É um banco de dados fácil e flexível e é ele que eu utilizo como database da [Rinocchi](https://discord.com/oauth2/authorize?client_id=675877051328102400&scope=bot&permissions=1903619198)

## Iniciando o desenvolvimento com o Firebase:

 Primeiramente, você irá em [firebase.google.com](https://firebase.google.com/), conectar com sua conta e criar um novo projeto.
 
![img](https://cdn.discordapp.com/attachments/554842584757829645/747615153922769007/Screenshot_20200824-213333.png)

 Após isso você irá nomear e desativar o Google Analitycs *(não há necessidade de utilizar ele)*.

### Criando a database:
 
 Há duas opções, o Cloud Firestore e o Realtime Database, eu uso e irei demostrar como utilizar o Realtime Database, que é mais fácil de utilizar.

 Após a criação do projeto, você verá a opção do Realtime Database e criará um banco de dados.

![img](https://cdn.discordapp.com/attachments/554842584757829645/747613271002972380/Screenshot_20200824-212253.png)

#### Regras do banco de dados:
 
 Essa é uma opção importante, ou você irá encontrar problemas, ao criar o banco de dados, você irá colocar as regras em modo de teste, assim todos com as informações da database poderão ler e escrever neste banco de dados, ou seja, seu bot.

![img](https://cdn.discordapp.com/attachments/554842584757829645/747613271338647622/Screenshot_20200824-212327.png)

> Nota:

> Essa opção não oferece riscos a database, o único problema é se você compartilhar as informações de conexão com a database. Coloque elas em um arquivo `.env` se quiser mais segurança.

#### Conexão:

 Agora, com tudo feito, você finalmente poderá fazer o login na database e armazenar informações.
 
 Depois de criar e definir as regras, você verá uma tela com um script `html`, cujo você pode ignorar e copiar apenas a variável com a configuração.

> *Ou você pode pegar clicando no ícone `</>`*

![img](https://cdn.discordapp.com/attachments/554842584757829645/747613271582048296/Screenshot_20200824-212500.png)

> Será uma variável parecida com essa, só que no meu caso eu já coloquei as informações no `.env`

```javascript
 var configF = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
};
```

## Inicializando a database:

 Tudo pronto? Fez todos os outros passos?
 
 Então você está preparado(a) para esse próximo passo.

 Embaixo da variável de configurações, você irá colocar o seguinte código:

```javascript
 // Declare o Firebase
 const firebase = require("firebase");
 firebase.initializeApp(configF);
```
 
 > *Caso tenha problemas com um erro de apps com mesmo nome, utilize este código:*

```javascript
 if (!firebase.apps.length) {
  firebase.initializeApp(configF);
 }
```

### Database

```javascript
 const database = firebase.database();
```

 Pronto, agora seu Bot pode ler e escrever na database.


## Utilização:
 
*Lembrando que você pode ler mais na [documentação do Firebase](https://firebase.google.com/docs?hl=pt-br)*

### `.ref()`
 
 Uma database funciona como os diretórios de arquivos do seu Pc ou celular, o `.ref` serve para "localizar" onde ele deve inserir ou pegar as informações.

```javascript
 const firebase = require("firebase");
 const database = firebase.database():

 database.ref(`Moedas/User/${message.author.id}`)
```

> Pegando as informações:

```javascript
 const firebase = require("firebase");
 const database = firebase.database():

 database.ref(`Moedas/User/${message.author.id}`).once('value').then(async function(db){

 });
```

### `.set()` 
 
 O `.set` serve para definir a informação, que sobrepõe às outras:

```javascript
 const firebase = require("firebase");
 const database = firebase.database():

 database.ref(`Moedas/User/${message.author.id}`).once('value').then(async function(db){
   if(db.val() == null){
     database.ref(`Moedas/User/${message.author.id}`)
     .set({
        coins: 0,
        coins_2: 0
     })
   }
 });
```

> Notas:

> `null` não é igual a 0, `null` é nulo e se o valor for zero a database não está vazia, ela tem um valor.

### `.update()` 

 O `.update` é o que utilizamos para adicionar ou subtrair valores na database

```javascript
 const firebase = require("firebase");
 const database = firebase.database():

 database.ref(`Moedas/User/${message.author.id}`).once('value').then(async function(db){
   if(db.val() == null){
     database.ref(`Moedas/User/${message.author.id}`)
     .set({
        coins: 0,
        coins_2: 0
     })
   } else {
      let gerarCoins = Math.floor(Math.random() * 15) + 1;
      database.ref(`Moedas/User/${message.author.id}`)
      .update({
        coins: db.val().coins + gerarCoins,
        coins_2: db.val().coins_2 + gerarCoins
      })
   }
 });
```

> Notas:

> O valor pode ser um número, não precisa necessariamente ser uma variável.

> O `db.val().coins` serve para que o script saiba qual o valor no qual ele deve subtrair ou adicionar.

> Para textos não se deve utilizar o `.update` e sim o `.set`, ou irá dar um erro, pois não é um valor numérico.

### Textos:

 A database não se limita a valores numéricos, ela também suporta textos, respeitando algumas regras:

* **1:** O texto **deve** estar entre aspas ou crases (caso for um objeto);

* **2:** Você **deve** utilizar o `.set`, pois você não soma um texto.

 Esse é o guia básico de como iniciar seu desenvolvimento com o Firebase, assim você poderá ter uma noção de como utilizar e adaptar aos seus códigos. 

 Dúvidas? Entre em contato que eu irei tentar te ajudar e adicionar aqui com mais informações, para que possa ajudar mais pessoas.

[🔗 Documentação do Firebase](https://firebase.google.com/docs?hl=pt-br)

