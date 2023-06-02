async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
         conn.sendFile(m.chat, `https://saipulanuar.ga/api/bokepig`, 'bokepig.jpg', `cuma gambar`, m)
    }
handler.help = ['bokepig (bkp image)']
handler.tags = ['dewasa']
handler.command = /^(bokepig)$/i

module.exports = handler
    
  
