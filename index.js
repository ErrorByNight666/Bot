const Discord = require("discord.js")
require("dotenv").config()



const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        
    ]
})

const bot = {
    client,
    prefix:"?",
    owners: ["461652769967833088"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot,reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot



client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})


client.login(process.env.TOKEN)