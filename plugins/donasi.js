let handler = async m => m.reply(`
╭─「 Donasi • Dana」
│ • [081934017857]
╰────

╭─「 Donasi • Bebas 」
│ • https://saweria.co/b3dul
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
