let axios = require("axios");
let handler = async(m, { conn, text }) => {
	axios.get(`https://saipulanuar.ga/api/fakta`).then ((res) => {
	 	let hasil = `${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['fakta unik']
handler.tags = ['internet']
handler.command = /^(fakta|faktaunik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
