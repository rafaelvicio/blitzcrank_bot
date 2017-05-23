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
                      "/invocador: Responde com as principais informações do invocador  \n" +
                      "/rankedsolo: Responde com as informações da Ranked Solo do invocado  \n" +
                      "/rankedflex: Responde com as informações da Ranked Flex do invocado \n" +
                      "/status: Informa sobre a atual situação do servidor  \n")
      .then( console.log(match) )
      .catch()
    )
  .catch((err) => console.log(err))

  module.exports = sendComandos
