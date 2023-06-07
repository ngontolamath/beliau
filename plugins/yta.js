const fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, 'URL tidak ditemukan', m)
  }
  try {
    let res = await fetch(`https://saipulanuar.cf/api/download/ytmp3?url=${text}`)
    let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'awkwokeror.mp3', '', m)
  } catch (error) {
    console.log(error)
    conn.reply(m.chat, 'Terjadi kesalahan saat mengunduh audio', m)
  }
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(yta|ytmp3)$/i;
handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
