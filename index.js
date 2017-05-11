const TelegramBot = require( `node-telegram-bot-api` )
const http = require( `axios` )

const token = `385522563:AAFpYSShk-aSj6dg6pMPm4NY4rXTuXef17o`
const url = `https://br1.api.riotgames.com/lol/summoner/v3/summoners/by-name/`
const key = `?api_key=RGAPI-a1503db2-d279-47cb-9f38-e73da6d734fc`

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
    http.get(`${url}${match[ 1 ]}${key}`)
      .then((response) => bot.sendMessage(msg.chat.id, response.data.name))
      .catch( logErrorEcho( `Error: ` ) )

bot.onText( /\/invocador (.*)/, sendInvocador)

bot.onText( /\/start(.*)/, sendStart)
