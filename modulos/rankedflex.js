const http = require( `axios` )

const bot = require('../config/bot')

const key = `?api_key=RGAPI-a1503db2-d279-47cb-9f38-e73da6d734fc`
const url_id = `https://br1.api.riotgames.com/lol/summoner/v3/summoners/by-name/`
const url_ranked = `https://br1.api.riotgames.com/lol/league/v3/positions/by-summoner/`

const getDados = (response) =>
http.get(`${url_ranked}${response.data.id}${key}`)

const sendRankedFlex = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then( getDados )
  .then((response) =>
    bot.sendMessage( msg.chat.id, "O jogador " + response.data[1].playerOrTeamName + " esta no elo " +
    response.data[1].tier + " " + response.data[1].rank + " com " + response.data[1].leaguePoints +
    " pontos e " + response.data[1].wins + " vitórias.")
      .then( console.log(match) )
      .catch()
    )
    .catch(
      bot.sendMessage( msg.chat.id, "Esse invocador não está classificado.")
    )

  module.exports = sendRankedFlex
