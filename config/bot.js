const TelegramBot = require( `node-telegram-bot-api` )

const token = `385522563:AAFpYSShk-aSj6dg6pMPm4NY4rXTuXef17o`

const bot = new TelegramBot( token, { polling: true } )

module.exports = bot
