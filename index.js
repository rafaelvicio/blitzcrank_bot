const bot = require('./config/bot')

const start = require('./modulos/start')
const comandos = require('./modulos/comandos')
const risadas = require('./modulos/risadas')
const rankedsolo = require('./modulos/rankedsolo')
const rankedflex = require('./modulos/rankedflex')

bot.onText( /\/start/, start)
bot.onText( /\/comandos/, comandos)
bot.onText( /lol|kkkk|huehue|h+a+h+a+|h+e+h+e+|h+i+h+i+|h+u+a+s+|j+e+j+e+|h+u+a+h+u+a|h+u+e+h+u+e/i, risadas)
bot.onText( /\/rankedsolo (.*)/, rankedsolo)
bot.onText( /\/rankedflex (.*)/, rankedflex)
