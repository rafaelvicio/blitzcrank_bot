const http = require( `axios` )

const bot = require('../config/bot')

const sendRisadas = ( msg, match ) =>
  bot.sendMessage( msg.chat.id, "hahahaha" )
    .then( logSuccessEcho( msg, match ) )
    .catch( logErrorEcho( 'Error:') );

module.exports = sendRisadas
