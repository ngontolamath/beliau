let handler = async (m, { conn }) => {
    conn.tebakgame = conn.tebakgame ? conn.tebakgame : {}
    let id = m.chat
    if (!(id in conn.tebakgame)) throw false
    let json = conn.tebakgame[id][1]
    m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_') + '```\nBalas soalnya Bukan Pesan ini_-')
}
handler.command = /^tega$/i
handler.limit = true
module.exports = handler