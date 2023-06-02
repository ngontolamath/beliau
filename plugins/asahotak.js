const fetch = require('node-fetch');
let timeout = 120000;
let poin = 500;

let handler = async (m, { conn, usedPrefix }) => {
  conn.asahotak = conn.asahotak ? conn.asahotak : {};
  let id = m.chat;
  if (id in conn.asahotak) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.asahotak[id][0]);
    throw false;
  }
  let src = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json');
  let json = await src.json();
  let randomIndex = Math.floor(Math.random() * json.length);
  let data = json[randomIndex];
  let caption = `
${json.soal}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}ao untuk bantuan
Bonus: ${poin} XP
  `.trim();
  let message = await conn.reply(m.chat, caption, m);
  conn.asahotak[id] = [
    message,
    data,
    poin,
    setTimeout(async () => {
      if (conn.asahotak[id]) {
        await conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${data.jawaban}*`, message);
        delete conn.asahotak[id];
      }
    }, timeout)
  ];
};

handler.help = ['asahotak'];
handler.tags = ['game'];
handler.command = /^asahotak/i;

module.exports = handler;
