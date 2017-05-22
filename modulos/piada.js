const http = require( `axios` )

const bot = require('../config/bot')

const risada = ( msg, match ) =>
    bot.sendMessage( msg.chat.id, "ha ha ha ha \n")
      .then( console.log(match) )
      .catch()

const sendPiada = ( msg, match ) =>
    bot.sendMessage( msg.chat.id, "Eu coloquei o 'bô' no robô \n")
      .then( risada )
      .then( console.log(match) )
      .catch()

  module.exports = sendPiada
