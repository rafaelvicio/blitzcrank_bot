const http = require( `axios` )

const bot = require('../config/bot')

const key = `?api_key=RGAPI-a1503db2-d279-47cb-9f38-e73da6d734fc`
const url_id = `https://br1.api.riotgames.com/lol/summoner/v3/summoners/by-name/`
const url_level = `https://br1.api.riotgames.com/lol/summoner/v3/summoners/`

const getDados = (response) =>
http.get(`${url_level}${response.data.id}${key}`)

const sendComandos = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then( getDados )
  .then((response) =>
    bot.sendMessage( msg.chat.id, "Eu conheço os seguints comandos: \n" +
                      "\n" +
                      "/invocador: Informações de um invocador  \n" +
                      "/partida: Informações da atual partida de um invocador  \n" +
                      "/rankedsolo: Informações da fila ranqueada solo de um invocador  \n" +
                      "/rankedflex: Informações da fila ranqueada flex de um invocador \n" +
                      "/status: Informa o status atual do servidor  \n")
      .then( console.log(match) )
      .catch()
    )
  .catch((err) => console.log(err))

  module.exports = sendComandos
