let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nama Nabi nya\nContoh : .kisah adam', m)

	axios.get(`https://saipulanuar.cf/api/muslim/kisahnabi?nabi=${text}`).then ((res) => {
	 	let hasil = `*NAMA* : ${res.data.result.name}\n*TAHUN KELAHIRAN* : ${res.data.result.thn_kelahiran}\n*KISAH* : ${res.data.result.description}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['kisah|kisahnabi'].map(v => v + ' <nama nabi>')
handler.tags = ['islam']
handler.command = /^(kisah|kisahnabi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
