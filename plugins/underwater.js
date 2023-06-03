let fetch = require('node-fetch')
let handler = async (m, {conn, text}) => {
   m.reply('Ksabar')
  let res = `https://saipulanuar.ga/api/textpro/drop-water?text=${text}`
  conn.sendFile(m.chat, res, 'underwatee.jpg', `Sudah jadi`, m)
}
handler.help = ['underwater'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(underwater)$/i

module.exports = handler
