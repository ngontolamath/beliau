let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) conn.reply(m.chat, `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen', m)
    delete conn.absen[id]
    m.reply(`Done!`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(hapusabsen)$/i
handler.group = true
handler.admin = true
module.exports = handler
