let handler  = async (m, { conn }) => {
         conn.sendFile(m.chat, `https://saipulanuar.cf/api/bokepig`, 'bokepig.jpg', `cuma gambar`, m)
 }
handler.help = ['bokepig (bkp image)']
handler.tags = ['dewasa', 'premium']
handler.command = /^(bokepig)$/i
handler.premium = true

module.exports = handler
    
  
