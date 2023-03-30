const { REST, Routes } = require('discord.js')
const fs = require('fs')
const ping = require('./misc/ping')
require('dotenv').config()

let commands = []

let command
const rest = new REST({version:'10'}).setToken(process.env.PTB_TOKEN)
fs.readdirSync('./commands').filter(file => !file.includes('.js')).map(dirName => {
    fs.readdirSync(`./commands/${dirName}`).map(commandName => {
        command = require(`./${dirName}/${commandName}`)
        commands = [...commands,command]
    })
})


module.exports ={
    execute: async () => {
        console.log(commands)
        rest.put(
            Routes.applicationGuildCommands(process.env.PTB_CLIENT_ID,process.env.JERICHO_GUILD_ID),
            { body: commands }
        ).then(response => console.log("Commands registered successfully")).catch(response => console.log("No"))
        return commands
    }
}
