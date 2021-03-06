exports.run = (client, message, args, testdatabase) => {
    if(message.author.id !== '233366720062947330' ) {
        message.channel.send(`You don't have proper permissions to run this command!`)
        return
    }
    const mentionedID = args[0]
    const mentionedAmount = args[1]
    if(!args[0]) {message.channel.send('You can\'t run this without any args')}

    testdatabase.query('SELECT points FROM testusers WHERE userId = $1', [mentionedID], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        console.log('After checking: ' + points);
        let usrPoints = points.points
        let usrLevel = points.level
        let usrAwards = points.awards
        let usrCoins = points.coins
        let usrXP = points.xp
        let coinsNeeded = (((usrLevel + 1) * 10)**2)
      points = {
      points: 0,
      level: 1,
      awards: "None",
      prefix: "r!",
      xp: 0,
      coins: 0,
      dailyCooldown: new Date().getTime(),
      zombieCooldown: new Date().getTime(),
      coinflipCooldown: new Date().getTime(),
      guessnumberCooldown: new Date().getTime(),
      rewardsAvailable: 0,
      vipLevel: 1,
      weapon: 1,
      enemyHealth: 100,
      enemyName: "Zombie",
      playerHealth: 100,
      levelPoints: 10,
      pointsIntoRewards: 1,
      pointsIntoXP: 1,
      pointsIntoCoins: 1,
      pointsIntoDamage: 1,
      pointsIntoShield: 1,
      pointsIntoHealth: 1
  };

    testdatabase.query('UPDATE testusers SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
        if (err) {console.log(err); return}
    });
});
message.channel.send(`Reset: ${mentionedID}!`)
}
