const axios = require("axios")
let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, 'URL tidak ditemukan', m)
  }
  try {
    let response = await axios.get(`https://saipulanuar.ga/api/download/ytmp3?url=${text}`)
    let result = response.data.result
conn.sendFile(m.chat, result, 'eror.mp3', `hore`
.trim(), m, null, {
  asDocument: chat.useDocument
})
  } catch (error) {
    console.log(error)
    conn.reply(m.chat, 'Terjadi kesalahan saat mengunduh audio', m)
  }
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ' <url>')
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i;
handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
