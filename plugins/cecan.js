let handler  = async (m, { conn }) => {
     conn.sendFile(m.chat, 'https://saipulanuar.ga/api/cecan/${command}', 'foto.jpg', 'ahhhh', m)
}
handler.help = ['random', 'hijaber', 'indonesia', 'malaysia', 'vietnam', 'thailand(error)', 'japan', 'korea', 'china']
handler.tag = ['cecan']
handler.command = /^(
