const TelegramBot = require( `node-telegram-bot-api` )
const http = require( `axios` )

const token = `385522563:AAFpYSShk-aSj6dg6pMPm4NY4rXTuXef17o`
const url = `https://www.minhaappi.com.br/usuario/`

const bot = new TelegramBot( token, { polling: true } )

const logErrorEcho = ( msg ) => ( err ) =>
  console.log( msg, err )

const logSuccessEcho = ( msg, match ) => ( data ) =>
  console.log( `Success: `, data )

const sendStart = ( msg, match ) =>
  bot.sendMessage( msg.chat.id, 'Olá, ' + msg.chat.first_name + ' eu sou o Bot Calouro, digite /help para conhecer o que eu posso fazer por voce! ;)')
    .then( logSuccessEcho( msg, match ) )
    .catch( logErrorEcho( `Error: ` ) )

const sendInvocador = ( msg, match ) =>
  http.get(`${URL_BASE}${match[ 1 ]}`)
    .then()
    .catch()

bot.onText( /\/start(.*)/, sendStart)
bot.onText( /\/invocador (.*)/, sendInvocador)
