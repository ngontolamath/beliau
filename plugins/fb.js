const fetch = require('node-fetch');
const fs = require('fs');

const handler = async (m, { conn, usedPrefix, text, command }) => {
  try {
    if (!text) {
      throw `Harap masukkan URL\n\nContoh: ${usedPrefix}${command} https://www.facebook.com/alanwalkermusic/videos/277641643524720`;
    }

    const res = await fetch(`https://saipulanuar.ga/api/download/fb?url=${text}`);
    if (!res.ok) {
      throw `Terjadi kesalahan saat mengambil video dari URL tersebut`;
    }

    const json = await res.json();
    if (!json.success) {
      throw `Tidak dapat mengunduh video dari URL yang diberikan`;
    }

    const fileName = 'kntl.mp4'; // Nama file yang ingin Anda gunakan
    const filePath = './' + fileName; // Path tempat menyimpan file

    const videoRes = await fetch(json.result.hd);
    const videoBuffer = await videoRes.buffer();

    fs.writeFileSync(filePath, videoBuffer); // Menyimpan file video

    await conn.sendFile(m.chat, filePath, fileName, `*${global.wm}*`, m);
    fs.unlinkSync(filePath); // Menghapus file setelah dikirim

  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'error', m);
  }
};

handler.help = ['fb <url>']
handler.tags = ['downloader']
handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i
handler.limit = true

module.exports = handler

