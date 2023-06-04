const axios = require("axios");

let handler = async (m, { conn, text }) => {

  if (!text) {

    return conn.reply(m.chat, 'URL tidak ditemukan', m);

  }

  try {

    const response = await axios.get(`https://saipulanuar.ga/api/download/ytmp3?url=${text}`);

    const result = response.data.result;

    const message = `

*Judul*: ${result.title}

*Channel*: ${result.channel}

*Upload*: ${result.published}

    `;

    conn.sendFile(m.chat, result.url,  0,0,m,true, {ptt:true })

  } catch (error) {
    console.log(error);
    conn.reply(m.chat, 'Terjadi kesalahan saat mengunduh audio', m);

  }
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^yt(a|mp3)$/i;
handler.fail = null;
handler.exp = 0;
handler.limit = true;

module.exports = handler;

