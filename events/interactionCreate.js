module.exports = {
    name: "interactionCreate",
    run: async (bot, Interaction) => {
        const {client} = bot
        if (!Interaction.isCommand()) return
        if (!Interaction.isGuild()) return Interaction.reply("This command can only be used in a server!")

        
    }
}