const TelegramBot = require( `node-telegram-bot-api` )

const token_teste = `318394911:AAE6OsdVjWyPTxJ1X0Vcf2lzYEeJxPBq52c` // Bot Calouro
const token_prod = `385522563:AAFpYSShk-aSj6dg6pMPm4NY4rXTuXef17o` // Bot Produção

const bot = new TelegramBot( token_prod, { polling: true } )

module.exports = bot
