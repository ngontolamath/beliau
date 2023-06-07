let axios = require("axios");
let handler = async(m, { conn, text }) => {

    //if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#lirik my love*', m)

  await m.reply('KsabarL')
	axios.get(`https://saipulanuar.cf/api/cerpen/random`).then ((res) => {
	 	let hasil = `${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['cerdom (cerita random)']
handler.tags = ['internet', 'fun', 'quotes']
handler.command = /^cerdom$/i


module.exports = handler



