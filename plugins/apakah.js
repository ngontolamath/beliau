let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `${pickRandom(['Yap','Sepertinya Begitu','Kayaknya','Kayaknya nggak','Nggak','Nggak mungkin'])}`
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['', 'kah'].map(v => 'apa' + v + ' <text>?')
handler.tags = ['kerang']
handler.command = /^apa(kah)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
