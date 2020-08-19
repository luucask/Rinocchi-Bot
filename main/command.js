const fs = require('fs')
const ascii = require('ascii-table')
let table = new ascii('Commands')
table.setHeading('Comando', 'Status do Carregamento')

module.exports = (client) => {
  console.log('Carregando Comandos...')
  fs.readdirSync("./commands/").forEach(local => {
    const comandos = fs.readdirSync(`./commands/${local}/`).filter(arquivo => arquivo.endsWith('.js')); //filtro para apenas arquivos em javascript

    for (let file of comandos) {
      let puxar = require(`../commands/${local}/${file}`)
      // no caso ele vai precisar de outra pasta dentro do commands, uma categoria.

      if (puxar.name) {
        client.commands.set(puxar.name, puxar)
        table.addRow(file, 'Correto')
      } else {
        table.addRow(file, 'Incorreto')
        continue;
      }
      if (puxar.aliases && Array.isArray(puxar.aliases))
        puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
    }
  })
  console.log('Comandos Carregados!')
}
