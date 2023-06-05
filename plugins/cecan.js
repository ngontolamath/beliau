const fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
  m.reply('Ksabar')
  try {
    let res = await fetch(`https://raw.githubusercontent.com/ngontolamath/databasee/main/cecan/${command}.json`)
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
  
    await conn.sendFile(m.chat, json, 'error.jpg', 'tolol', m)
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan')
  }
}
handler.help = ['indonesia', 'malaysia', 'vietnam', 'thailand', 'japan', 'korea', 'china']
handler.tags = ['cecan']
handler.command = /^(indonesia|malaysia|vietnam|thailand|japan|korea|china)$/i
handler.limit = true

module.exports = handler
