let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  try {
    m.reply('Ksabar')
    let res = `https://saipulanuar.ga/api/textpro/drop-water?text=${encodeURIComponent(text)}`
    conn.sendFile(m.chat, res, 'underwater.jpg', 'Sudah jadi', m)
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan')
  }
}

handler.help = ['underwater'].map((v) => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(underwater)$/i

module.exports = handler
