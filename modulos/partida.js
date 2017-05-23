const http = require( `axios` )

const bot = require('../config/bot')

const key = `?api_key=RGAPI-a1503db2-d279-47cb-9f38-e73da6d734fc`
const url_id = `https://br1.api.riotgames.com/lol/summoner/v3/summoners/by-name/`
const url_spectator = `https://br1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/`

const getDados = (response) =>
http.get(`${url_spectator}${response.data.id}${key}`)

const sendPartida = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then( getDados )
  .then((response) =>
      bot.sendMessage( msg.chat.id, "O invocador está jogando com: \n" +
      "\n" +
      "Time Azul: \n" +
      response.data.participants[0].summonerName + "\n" +
      response.data.participants[1].summonerName + "\n" +
      response.data.participants[2].summonerName + "\n" +
      response.data.participants[3].summonerName + "\n" +
      response.data.participants[4].summonerName + "\n" +
      "\n" +
      "Time Vermelho: \n" +
      response.data.participants[5].summonerName + "\n" +
      response.data.participants[6].summonerName + "\n" +
      response.data.participants[7].summonerName + "\n" +
      response.data.participants[8].summonerName + "\n" +
      response.data.participants[9].summonerName + "\n")
        .then( console.log(match) )
        .catch()
  )
  .catch(
    bot.sendMessage( msg.chat.id, "Esse invocador não está em uma partida ativa no momento, tente daqui a pouco")
  )

  module.exports = sendPartida
