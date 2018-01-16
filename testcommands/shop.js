exports.run = (client, message, args, testdatabase) => {
    testdatabase.query('SELECT points FROM testusers WHERE userId = $1', [message.author.id], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        let usrPoints = points.points
        let usrLevel = points.level
        let usrAwards = points.awards
        let usrKills = points.zombiesSlain
        let usrCoins = points.coins
        let usrXP = points.xp
        let coinsNeeded = (((usrLevel + 1) * 10)**2)
message.channel.send(`**Shop Items:**\nID:1 100 XP \`Cost: 500\`\nID:2 1500 XP \`Cost: 5000\`\nID:3 Reward level up \`Cost: 500\`\nID:4 Nothing. \`Cost: Nothing!\`\n\n**To buy an item, use r!buy <ID> <AMOUNT>**`)
    });
}
