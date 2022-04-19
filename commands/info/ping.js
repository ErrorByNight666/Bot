module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    devOnlt: false,
    run: async ({client, message, args}) => {
        message.reply(Pong)
    }
}