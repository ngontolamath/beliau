const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomernya', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Kepanjangan', m)

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 DARI OWNER 」*\n\nDari : Owner\nPesan : ${pesan}\n\n*_E-Botz_*`

    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)

    let logs = `Nice banget bang`
    conn.reply(m.chat, logs, m)
}
handler.help = ['kirim nomer|chat']
handler.tags = ['owner']
handler.command = /^(kirim)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
