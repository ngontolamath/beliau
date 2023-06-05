let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
m.reply('KsabarL')
  let res = await fetch('https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/anime/husbu.json')
  let data = await res.json()
  let json = data[Math.floor(Math.random() * data.length)]
     conn.sendFile(m.chat, json, 'eror.jpg', 'gantengan owner', m)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i

module.exports = handler
