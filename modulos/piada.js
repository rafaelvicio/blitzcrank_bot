const http = require( `axios` )

const bot = require('../config/bot')

const sendPiada = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then((response) =>
    bot.sendMessage( msg.chat.id, "Eu coloquei o 'bô' no robô \n")
      .then( console.log(match) )
      .catch()
    )
  .catch((err) => console.log(err))

  module.exports = sendPiada
