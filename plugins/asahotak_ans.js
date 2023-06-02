const similarity = require('similarity');
const threshold = 0.72;

let handler = async function (m) {
    let id = m.chat;
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*ao/i.test(m.quoted.contentText)) return true;
    
    this.asahotak = this.asahotak ? this.asahotak : {};
    if (!(id in this.asahotak)) return m.reply('Soal itu telah berakhir');
    
    if (m.quoted.id == this.asahotak[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.asahotak[id][1]));
        if (['.ao', 'Bantuan', ''].includes(m.text)) return true;
        
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.asahotak[id][2];
            await this.reply(m.chat, `*Benar!* +${this.asahotak[id][2]} XP`);
            clearTimeout(this.asahotak[id][3]);
            delete this.asahotak[id];
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) {
            m.reply(`*Dikit Lagi!*`);
        } else {
            m.reply(`*Salah!*`);
        }
    }
    
    return true;
};

module.exports = handler;
