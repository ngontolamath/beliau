let axios = require("axios");
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, 'Masukkan teks/nContoh: .${command} halo dek',  m)
	axios.get(`https://saipulanuar.ga/api/f/simi?text=${text}`).then ((res) => {	
    let hasil = `${res.data.result}`
    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['simi <teks>', 'simsimi <teks>', 'ai <teks>']
handler.tags = ['fun']
handler.command = /^(simi|simsimi|ai)$/i

module.exports = handler

