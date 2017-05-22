const http = require( `axios` )

const bot = require('../config/bot')

const risadas = [
  'ha ha ha ha ha',
  'he he he he he',
  'kk kk kk kk kk'
]

const sendRisadas = ( msg, match ) =>
  bot.sendMessage( msg.chat.id, risadas[Math.floor(Math.random() * risadas.length)] )
    .then( console.log(match) )
    .catch( (err) => console.log(err) );

module.exports = sendRisadas
