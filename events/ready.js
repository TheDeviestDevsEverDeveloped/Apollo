exports.run = (client) => {
  client.user.setPresence({
    game: {
      name: `;;help | In ${client.guilds.size} servers!`,
      type: 0
    }
  })
  console.log(`Apollo is connected to the Discord WebSocket`)
}
