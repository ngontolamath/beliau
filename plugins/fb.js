let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL\n\nContoh : .fb https://www.facebook.com/alanwalkermusic/videos/277641643524720`
    let res = await fetch(`https://saipulanuar.ga/api/download/fb?url=${text}`)
    if (!res.ok) throw await `error`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result.hd, 'kntl.mp4', `*${global.wm}*`, m)
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i

handler.limit = true

module.exports = handler
