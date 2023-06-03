let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
     m.reply('Ksabar')
  let res = await fetch(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/nsfw/${command}.json}`)
  let json = await res.json()
  if (!json.url) throw json
  await conn.sendButtonImg(m.chat, json.url, 'sagne sama kartun telanjang?', `random ${command}`, 'Next', `${usedPrefix + command}`, m, false)
}
handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'boobjob', 'cum', 'creampie', 'cuckold', 'ero', 'elves', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'incest', 'masturbation', 'pantsu', 'orgy', 'tentacles', 'thighs', 'uniform', 'vagina', 'yuri' ]
handler.tags = ['dewasa']
handler.command = /^(ahegao|ass|bdsm|blowjob|boobjob|cum|creampie|cuckold|ero|elves|femdom|foot|gangbang|glasses|hentai|incest|masturbation|pantsu|orgy|tentacles|thighs|uniform|vagina|yuri)$/i

handler.private = false
handler.limit = 10
handler.register = false

module.exports = handler

//by lui
