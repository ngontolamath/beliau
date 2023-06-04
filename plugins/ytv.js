const axios = require("axios");
let handler = async (m, { conn, text }) => {
   if (!text) {
   return conn.reply(m.chat, 'URL tidak ditemukan', m);
  }
 try {
    let response = await axios.get(`https://saipulanuar.ga/api/download/ytmp4?url=${text}`);
    let result = response.data.result;
    let message = `
*Judul*: ${result.title}
*Channel*: ${result.channel}
*Upload*: ${result.published}
`;
  conn.sendFile(m.chat, result.url, 'error.mp4', message, m);
  } catch (error) {
    console.log(error);
    conn.reply(m.chat, 'Terjadi kesalahan', m)
  }
}
handler.help = ['mp4','v',''].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
