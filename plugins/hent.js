let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
     m.reply('tunggu...')
  let res = await fetch(`https://hmtai.herokuapp.com/nsfw/${command}`)
  let json = await res.json()
  if (!json.url) throw json
  await conn.sendButtonImg(m.chat, json.url, 'sagne sama kartun telanjang?', `random ${command}`, 'Next', `${usedPrefix + command}`, m, false)
}
handler.help = ['ass', 'bdsm', 'blowjob', 'boobjob', 'cum', 'creampie', 'cuckold', 'ero', 'elves', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'incest', 'masturbation', 'pantsu', 'orgy', 'tentacles', 'thighs', 'uniform', 'vagina', 'yuri' ]
handler.tags = ['dewasa']
handler.command = /^(ass|bdsm|blowjob|boobjob|cum|creampie|cuckold|ero|elves|femdom|foot|gangbang|glasses|hentai|incest|masturbation|pantsu|orgy|tentacles|thighs|uniform|vagina|yuri)$/i

handler.private = false
handler.limit = 10
handler.register = false

module.exports = handler

//by lui
