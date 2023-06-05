const fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
  let id = m.chat
  if (id in conn.tebakanime) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanime[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/games/tebakchara.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
  Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}wa untuk bantuan
Bonus: ${poin} XP
    `.trim()
  conn.tebakanime[id] = [
    await conn.sendFile(m.chat, json.image, 'animek.jpg', caption, m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakanime[id]) await conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*`, conn.tebakanime[id][0])
      delete conn.tebakanime[id]
    }, timeout)
  ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i

module.exports = handler
