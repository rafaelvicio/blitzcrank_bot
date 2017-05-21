const TelegramBot = require( `node-telegram-bot-api` )

const token = `318394911:AAE6OsdVjWyPTxJ1X0Vcf2lzYEeJxPBq52c`

const bot = new TelegramBot( token, { polling: true } )

module.exports = bot
