const http = require( `axios` )

const bot = require('../config/bot')

const key = `?api_key=RGAPI-a1503db2-d279-47cb-9f38-e73da6d734fc`
const url_id = `https://br1.api.riotgames.com/lol/summoner/v3/summoners/by-name/`
const url_level = `https://br1.api.riotgames.com/lol/summoner/v3/summoners/`

const getDados = (response) =>
http.get(`${url_level}${response.data.id}${key}`)

const sendStart = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then( getDados )
  .then((response) =>
    bot.sendMessage( msg.chat.id, "Energizado e pronto para servir. \n" +
                      "Eu fui criado para servi a você, basta enviar o comando certo. \n" +
                      "Para conhecer os meus comandos digite /comandos")
      .then( console.log(match) )
      .catch((err) => console.log(err))
    )
  .catch((err) => console.log(err))

  module.exports = sendStart
