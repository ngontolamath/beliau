async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
         conn.sendFile(m.chat, `https://saipulanuar.ga/api/bokepig`, 'bokepig.jpg', `cuma gambar`, m)
    }
handler.help = ['bokepig (bkp image)']
handler.tags = ['dewasa', 'premium']
handler.command = /^(bokepig)$/i
handler.premium = true

module.exports = handler
    
  
