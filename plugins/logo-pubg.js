let handler  = async (m, {conn, text}) => {

if (!text[0]) return conn.reply(m.chat, 'Masukkan 2 teks/nContoh: .pubg Faisal Tolol', m)
  if (!text[1]) return conn.reply(m.chat, 'Masukkan 2 teks/nContoh: .pubg Faisal Tolol', m)
    conn.sendFile(m.chat, `https://saipulanuar.ga/api/maker/pubeje?text=${text[0]}&text2=${text[1]}`, 'joker.jpg', `awkwok lawak badut`, m)

}

handler.help = ['pubg']
handler.tags = ['logo']
handler.command = /^(pubg)$/i

module.exports = handler
