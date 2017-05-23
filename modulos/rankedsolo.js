const http = require( `axios` )

const bot = require('../config/bot')

const key = `?api_key=RGAPI-a1503db2-d279-47cb-9f38-e73da6d734fc`
const url_id = `https://br1.api.riotgames.com/lol/summoner/v3/summoners/by-name/`
const url_ranked = `https://br1.api.riotgames.com/lol/league/v3/positions/by-summoner/`

const getDados = (response) =>
http.get(`${url_ranked}${response.data.id}${key}`)

const sendRankedSolo = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then( getDados )
  .then((response) =>
    bot.sendMessage( msg.chat.id, "O jogador " + response.data[0].playerOrTeamName + " esta no elo " +
    response.data[0].tier + " " + response.data[0].rank + " com " + response.data[0].leaguePoints +
    " pontos e " + response.data[0].wins + " vitórias.")
      .then( console.log(match) )
      .catch()
    )
    .catch(
      bot.sendMessage( msg.chat.id, "Esse invocador não está classificado.")
    )

  module.exports = sendRankedSolo
