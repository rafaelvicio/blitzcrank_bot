const TelegramBot = require( `node-telegram-bot-api` )
const http = require( `axios` )

const token = `385522563:AAFpYSShk-aSj6dg6pMPm4NY4rXTuXef17o`
const key = `?api_key=RGAPI-a1503db2-d279-47cb-9f38-e73da6d734fc`
const url_id = `https://br1.api.riotgames.com/lol/summoner/v3/summoners/by-name/`
const url_level = `https://br1.api.riotgames.com/lol/summoner/v3/summoners/`
const url_ranked = `https://br1.api.riotgames.com/lol/league/v3/positions/by-summoner/`
const url_challenger = `https://br1.api.riotgames.com/lol/league/v3/challengerleagues/by-queue/RANKED_SOLO_5x5`

const bot = new TelegramBot( token, { polling: true } )

const cb1 = (response) =>
http.get(`${url_level}${response.data.id}${key}`)

const cb2 = (response) =>
http.get(`${url_ranked}${response.data.id}${key}`)

const cb3 = (response) =>
http.get(`${url_challenger}${response.data.id}${key}`)

const sendLevel = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then( cb1 )
  .then((response) =>
    bot.sendMessage( msg.chat.id, "O jogador " + response.data.name + " tem level " + response.data.summonerLevel )
      .then( console.log(match) )
      .catch()
    )
  .catch((err) => console.log(err))

const sendRanked = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then( cb2 )
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err))

const sendChallenger = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then( cb3 )
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err))

bot.onText( /\/invocador (.*)/, sendLevel)
bot.onText( /\/ranked (.*)/, sendRanked)
bot.onText( /\/challenger (.*)/, sendChallenger)
