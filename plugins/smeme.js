const uploadImage = require('../lib/uploadImage')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
    let img = await q.download()
    let url = await uploadImage(img)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
try {
conn.sendImageAsSticker(m.chat, meme, m, { packname: "${global.wm}", author: "by Bedulbot" })
  } catch (e) {
    m.reply('gagal membuat stiker, Mencoba Mengirim gambar')
    await conn.sendFile(m.chat, meme, 'image.png', 'Nih Banh', m)
  }
}
handler.help = ['smeme<teks atas>|<teks bawah>']
handler.tags = ['sticker']
handler.command = /^(smeme)$/i

handler.limit = false

module.exports = handler
