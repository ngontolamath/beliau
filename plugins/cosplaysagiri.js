let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
     m.reply('tunggu...')
  let res = await (await fetch('https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/cosplaysagiri.json')).json()
  let cosser = res[Math.floor(Math.random() * res.length)]
  await conn.sendFile(m.chat, cosser, 'sagiri.jpg', 'Stres wibu', m, false)
}
handler.help = ['cosplaysagiri']
handler.tags = ['anime']
handler.command = /^(cosplaysagiri)$/i

module.exports = handler
