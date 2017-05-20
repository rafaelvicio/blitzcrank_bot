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

const crateObject = ( obj ) =>
  ( { [ Object.values( obj )[ 1 ] ] : Object.values( obj )[ 0 ] } )

const merge = ( result, obj ) =>
  result.concat( [ crateObject( obj ) ] )

const getValuesFromObject = ( result, obj ) =>
  merge( result, obj )

const sendStart = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then( cb1 )
  .then((response) =>
    bot.sendMessage( msg.chat.id, "Energizado e pronto para servir. \n" +
                      "Eu fui criado para servi a você, basta enviar o comando certo. \n" +
                      "Para conhecer os meus comandos digite /comandos")
      .then( console.log(match) )
      .catch()
    )
  .catch((err) => console.log(err))

const sendRisada = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then( cb1 )
  .then((response) =>
    bot.sendMessage( msg.chat.id, "Eu conheço os seguints comandos: \n" +
                      "/invocador + nome de invocador: - Responde com as principais informações do invocador  \n" +
                      "/sendRankedSolo + nome de invocador: - Responde com as informações da Ranked Solo do invocado  \n" +
                      "/sendRankedFlex + nome de invocador: - Responde com as informações da Ranked Flex do invocado \n")
      .then( console.log(match) )
      .catch()
    )
  .catch((err) => console.log(err))

const sendComandos = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then( cb1 )
  .then((response) =>
    bot.sendMessage( msg.chat.id, "Hahahahaha!")
      .then( console.log(match) )
      .catch()
    )
  .catch((err) => console.log(err))

const sendRankedSolo = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then( cb2 )
  .then((response) =>
    bot.sendMessage( msg.chat.id, "O jogador " + response.data[0].playerOrTeamName + " esta no elo " +
    response.data[0].tier + " " + response.data[0].rank + " com " + response.data[0].leaguePoints +
    " pontos e " + response.data[0].wins + " vitórias.")
      .then( console.log(match) )
      .catch()
    )
  .catch((err) => console.log(err))

const sendRankedFlex = ( msg, match ) =>
http.get(`${url_id}${match[ 1 ]}${key}`)
  .then( cb2 )
  .then((response) =>
    bot.sendMessage( msg.chat.id, "O jogador " + response.data[1].playerOrTeamName + " esta no elo " +
    response.data[1].tier + " " + response.data[1].rank + " com " + response.data[1].leaguePoints +
    " pontos e " + response.data[1].wins + " vitórias.")
      .then( console.log(match) )
      .catch()
    )
  .catch((err) => console.log(err))

bot.onText( /\/start/, sendStart)
bot.onText( /\/comandos/, sendComandos)
bot.onText( /lol|kkkk|huehue|h+a+h+a+|h+e+h+e+|h+i+h+i+|h+u+a+s+|j+e+j+e+|h+u+a+h+u+a|h+u+e+h+u+e/i/, sendRisada)
bot.onText( /\/rankedsolo (.*)/, sendRankedSolo)
bot.onText( /\/rankedflex (.*)/, sendRankedFlex)
