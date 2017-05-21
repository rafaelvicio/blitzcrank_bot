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
    .then( console.log(match) )
    .catch( (err) => console.log(err) );

module.exports = sendRisadas
