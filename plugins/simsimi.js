let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text) {
      throw `Masukkan teks\n\nContoh: ${usedPrefix}${command} halo dek`
    }
    let res = await fetch(`https://saipulanuar.ga/api/f/simi?text=${text}`)
    if (!res.ok) {
      throw `Terjadi kesalahan`
    }
    let data = await res.json()
    let hasil = '${data.result}'
    conn.reply(m.chat, hasil, m)
  } catch (error) {
    console.error(error)
    await conn.reply(m.chat, 'error', m)
  }
}
handler.help = ['simi <teks>', 'simsimi <teks>', 'ai <teks>']
handler.tags = ['fun']
handler.command = /^(simi|simsimi|ai)$/i

module.exports = handler
