let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendFile(m.chat, 'https://telegra.ph/file/8c40e7aaf759253d85fe0.mp4', 'ok.mp4', 'Beliau Ini', m)
}

handler.customPrefix = /@62857718367629/i
handler.command = new RegExp

module.exports = handler
