const similarity = require('similarity')
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*cek/i.test(m.quoted.text)) return !0
    this.tebaklagu = this.tebaklagu ? this.tebaklagu : {}
    if (!(id in this.tebaklagu)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.tebaklagu[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebaklagu[id][1]))
        if (['.cek', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.judul.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebaklagu[id][2]
            this.reply(m.chat, `*Benar!* +${this.tebaklagu[id][2]} XP`, m)
                     clearTimeout(this.tebaklagu[id][3])
            delete this.tebaklagu[id]
        } else if (similarity(m.text.toLowerCase(), json.judul.toLowerCase().trim()) >= 0.72) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0
module.exports = handler
