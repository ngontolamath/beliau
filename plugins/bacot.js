let axios = require("axios");
let handler = async(m, { conn, text }) => {
	axios.get(`https://saipulanuar.cf/api/quotes`).then ((res) => {
	 	let hasil = `${res.data.result.quotes}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['bacot', 'bct']
handler.tags = ['internet']
handler.command = /^(bct|bacot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
