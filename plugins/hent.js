const fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
  m.reply('Ksabar')
  try {
    let res = await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/${command}.json`)
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
  
    await conn.sendFile(m.chat, json, 'error.jpg', 'tolol', m)
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan')
  }
}

handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'boobjob', 'cum', 'creampie', 'cuckold', 'ero', 'elves', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'incest', 'masturbation', 'pantsu', 'orgy', 'tentacles', 'thighs', 'uniform', 'pussy', 'yuri']
handler.tags = ['dewasa']
handler.command = /^(ahegao|ass|bdsm|blowjob|boobjob|cum|creampie|cuckold|ero|elves|femdom|foot|gangbang|glasses|hentai|incest|masturbation|pantsu|orgy|tentacles|thighs|uniform|pussy|yuri)$/i
handler.private = false
handler.premium = true
handler.register = false

module.exports = handler
