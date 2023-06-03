let handler  = async (m, {conn, text}) => {
if (!text) return conn.reply(m.chat, 'Masukkan teks/nContoh: .joker Faisal Tolol', m)
    conn.sendFile(m.chat, `https://saipulanuar.ga/api/bokepig`, 'bokepig.jpg', `cuma gambar`, m)
}
handler.help = ['joker']
handler.tags = ['logo']
handler.command = /^(badut|joker)$/i
module.exports = handler
