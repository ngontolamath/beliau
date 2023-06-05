const fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgame = conn.tebakgame ? conn.tebakgame : {}
  let id = m.chat
  if (id in conn.tebakgame) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgame[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/ngontolamath/databasee/master/games/tebakgame.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
  Game apakah ini?
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tega untuk bantuan
Bonus: ${poin} XP
    `.trim()
  conn.tebakgame[id] = [
    await conn.sendFile(m.chat, json.img, 'eror.jpg', caption, m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakgame[id]) await conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgame[id][0])
      delete conn.tebakgame[id]
    }, timeout)
  ]
}
handler.help = ['tebakgame']
handler.tags = ['game']
handler.command = /^tebakgame/i

module.exports = handler
