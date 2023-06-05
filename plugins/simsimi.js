const fetch = require('node-fetch');
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, 'Masukkan teks/nContoh: .${command} halo dek',  m)
	let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json');
   if (!res.ok) throw eror
    let data = await res.json()
    let hasil = '${data.url}'
conn.reply(m.chat, hasil, m)
	
}
handler.help = ['simi <teks>', 'simsimi <teks>', 'ai <teks>']
handler.tags = ['fun']
handler.command = /^(simi|simsimi|ai)$/i

module.exports = handler

