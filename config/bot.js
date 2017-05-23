const TelegramBot = require( `node-telegram-bot-api` )

const token_teste = `318394911:AAE6OsdVjWyPTxJ1X0Vcf2lzYEeJxPBq52c` // Bot Calouro
const token_prod = `318394911:AAE6OsdVjWyPTxJ1X0Vcf2lzYEeJxPBq52c` // Bot Produção

const bot = new TelegramBot( token_teste, { polling: true } )

module.exports = bot
