const similarity = require('similarity');
const threshold = 0.72;

let handler = async (m) => {
  let id = m.chat;
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*suka/i.test(m.quoted.contentText)) return true;
  this.susunkata = this.susunkata ? this.susunkata : {};
  if (!(id in this.susunkata)) return m.reply('Soal itu telah berakhir');
  if (m.quoted.id == this.susunkata[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.susunkata[id][1]));
    if (['.suka', 'Bantuan', ''].includes(m.text)) return true;
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.susunkata[id][2];
      await this.reply(m.chat, `*Benar!* +${this.susunkata[id][2]} XP`);
      clearTimeout(this.susunkata[id][3]);
      delete this.susunkata[id];
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) {
      m.reply(`*Dikit Lagi!*`);
    } else {
      m.reply(`*Salah!*`);
    }
  }
  return true;
};

handler.exp = 0;

module.exports = handler;
