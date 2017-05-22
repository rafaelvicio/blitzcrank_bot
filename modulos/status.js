const http = require( `axios` )

const bot = require('../config/bot')

const key = `?api_key=RGAPI-a1503db2-d279-47cb-9f38-e73da6d734fc`
const url_status = `https://br1.api.riotgames.com/lol/status/v3/shard-data`

const sendStatus = ( msg, match ) =>
http.get(`${url_status}${key}`)
  .then((response) =>
    bot.sendMessage( msg.chat.id, "Verificando sistema... \n"
                    + "\n"
                    + "Jogo: " + response.data.services[0].status + "\n"
                    + "Loja: " + response.data.services[1].status + "\n"
                    + "Site: " + response.data.services[2].status + "\n"
                    + "Client: " + response.data.services[3].status + "\n"
                    + "Update: " + response.data.services[4].status + "\n")
      .then( console.log(match) )
      .catch()
    )
  .catch()

  module.exports = sendStatus
