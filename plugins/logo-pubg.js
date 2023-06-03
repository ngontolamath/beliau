let fetch = require('node-fetch')
let handler = async (m, {conn, args, response}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan 2 kata\nContoh: Faisal|tolol'
    conn.sendFile(m.chat, `https://saipulanuar.ga/api/maker/pubeje?text=${response[0]}&text2=${response[1]}`, 'pabji.jpg', `awkwok lawak komto`, m)

}

handler.help = ['pubg']
handler.tags = ['logo']
handler.command = /^(pubg)$/i

module.exports = handler
