let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
     m.reply('Ksabar')
  let res = await fetch(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/nsfw/${command}.json}`)
  let data = await res.json()
  let json = data[Math.floor(Math.random() * data.length)]
  
  
await conn.sendFile(m.chat, json, 'error.jpg', `tolol`, m)
}
handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'boobjob', 'cum', 'creampie', 'cuckold', 'ero', 'elves', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'incest', 'masturbation', 'pantsu', 'orgy', 'tentacles', 'thighs', 'uniform', 'vagina', 'yuri' ]
handler.tags = ['dewasa']
handler.command = /^(ahegao|ass|bdsm|blowjob|boobjob|cum|creampie|cuckold|ero|elves|femdom|foot|gangbang|glasses|hentai|incest|masturbation|pantsu|orgy|tentacles|thighs|uniform|vagina|yuri)$/i

handler.private = false
handler.limit = 10
handler.register = false

module.exports = handler
