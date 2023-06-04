let handler = async (m, {conn, command}) => {
  try {
    conn.sendFile(m.chat, `https://saipulanuar.ga/api/cecan/${command}`, 'foto.jpg', 'ahhhh', m)
  } catch (error) {
    console.log(error)
    conn.reply(m.chat, 'Terjadi kesalahan', m)
  }
}

handler.help = ['random', 'hijaber', 'indonesia', 'malaysia', 'vietnam', 'thailand', 'japan', 'korea', 'china']
handler.tags = ['cecan']
handler.command = /^(random|hijaber|indonesia|malaysia|vietnam|thailand|japan|korea|china)$/i
handler.limit = true

module.exports = handler
