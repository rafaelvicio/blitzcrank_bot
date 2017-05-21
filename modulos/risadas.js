const http = require( `axios` )

const bot = require('../config/bot')

const risadas = [
  'hehehehehe',
  'hahahahaha',
  'hauhauhauh',
  'kkkkkkkkkk'
]

const sendRisadas = ( msg, match ) =>
  bot.sendMessage( msg.chat.id, risadas[Math.floor(Math.random() * risadas.length)] )
    .then( logSuccessEcho( msg, match ) )
    .catch( logErrorEcho( 'Error:') );

module.exports = sendRisadas
