let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'url/link nya mana?'
  let res = await fetch(`https://saipulanuar.ga/api/short/tinyurl?url=${text}`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw 'Link Invalid!\nPeriksa url anda'
}
handler.help = ['tinyurl'].map(v => v + ' <link>')
handler.tags = ['shortlink']
handler.command = /^tinyurl$/i

module.exports = handler
