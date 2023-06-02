const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command, usedPrefix }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) {
                await conn.reply(m.chat, '_Kamu tidak sedang berada di anonymous chat_ 👤', m)
                throw false
            }
            m.reply('_Ok_')
            let other = room.other(m.sender)
            if (other) await conn.sendMessage(other, '_Partner meninggalkan chat 💬_')
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                await conn.reply(m.chat, '_Kamu masih berada di dalam anonymous chat, menunggu partner_ 👤')
                throw false
            }
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await conn.sendMessage(room.a, '_Partner ditemukan! 🔎_')
                room.b = m.sender
                room.state = 'CHATTING'
                await conn.sendMessage(room.b, '_Partner ditemukan! 🔎_')
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await conn.reply(m.chat, '_Menunggu partner... ketik .leave jika anda bosan')
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = 'anonymous'

handler.command = ['start', 'leave', 'next']
handler.private = true

module.exports = handler

let wm = global.wm
