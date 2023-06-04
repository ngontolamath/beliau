let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Urlnya mana deks', m)

	axios.get(`https://saipulanuar.ga/api/download/ytmp3?url=${text}`).then ((res) => {
	 	let hasil = `*Judul*: ${res.data.result.title}\n*Channel*: ${res.data.result.channel}\n*Upload*: ${res.data.result.published}`

    conn.sendFile(m.chat, res.data.result.url, 'error.mp3', '', m)
	})
}
handler.help = ['mp3','a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

async function shortlink(url){
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''}

