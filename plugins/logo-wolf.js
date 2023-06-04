let fetch = require('node-fetch')
let handler = async (m, {conn, args, response}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan 2 kata\nContoh: Faisal|tolol'
    conn.sendFile(m.chat, `https://saipulanuar.ga/api/textpro/logo-wolf?text=${response[0]}&text2=${response[1]}`, 'eror.jpg', `awkwok`, m)

}

handler.help = ['wolf <teks>|<teks2>']
handler.tags = ['logo']
handler.command = /^(wolf)$/i

module.exports = handler
