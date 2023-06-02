let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
     m.reply('tunggu...')
  let res = await (await fetch('https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/cosplay.json')).json()
  let cosser = res[Math.floor(Math.random() * res.length)]
  await conn.sendFile(m.chat, cosser, 'cosser.jpg', '3D', m, false)
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^(cosplay)$/i

module.exports = handler
