exports.run = (client, message, args, testdatabase, usedPrefix) => {
    if(args[1]){
    var amountWanted = args[1]
    } else {
    var amountWanted = 1
    }
    if(args[0]){
    var itemWanted = args[0]
    } else {
    message.channel.send('You need to choose an item!')
        return;
    }
        const mentionedID = message.author.id
if (itemWanted % 1 !== 0){
    return;
    message.channel.send('I need a number')
                         }
if (amountWanted % 1 !== 0){
    message.channel.send('I need a number')
    return;
}



        
        testdatabase.query('SELECT points FROM testusers WHERE userId = $1', [mentionedID], (err, res) => {
            if (err) {console.log(err); return}
            let points = res.rows[0];
            if(!points){message.channel.send('This user currently has no database stats')}
            else points = JSON.parse(res.rows[0].points);
            if ((args[0] === '1') && ((points.coins < 500) * amountWanted)){
            message.channel.send(`*${message.author.username}, you don't have enough coins*`)
            return;
            }
            if ((args[0] === '2') && ((points.coins < 5000 * amountWanted))){
            message.channel.send(`*${message.author.username}, you don't have enough coins*`)
            return;
            }
            if ((args[0] === '3') && ((points.coins < 500 * amountWanted))){
            message.channel.send(`*${message.author.username}, you don't have enough coins*`)
            return;
            }
            if ((args[0] === '+-+') && (points.coins < amountWanted) || (points.playerHealth + amountWanted < 100)){
            message.channel.send(`*${message.author.username}, you don't have enough coins or you're too high of an HP amount already*`)
            return;
            }
            if ((args[0] === '+-+') && (points.coins > amountWanted) && (points.playerHealth + amountWanted < 101)){
            points.coins = points.coins - (amountWanted)
            points.playerHealth = points.playerHealth - (0 - amountWanted)
            message.channel.send(`*${message.author.username} bought ${amountWanted} HP! Current HP: ${points.playerHealth}*`)  
            }
            if ((args[0] === '3') && (points.coins > (500 * amountWanted))){
            points.coins = points.coins - (500 * amountWanted)
            points.rewardLevel = 0 - (0 - (points.rewardLevel)) - (0 - amountWanted)
            message.channel.send(`*${message.author.username} upgraded their reward to level ${points.rewardLevel}!*`)  
            }
            if ((args[0] === '2') && (points.coins > (5000 * amountWanted))){
            points.coins = points.coins - (5000 * amountWanted)
            points.xp = 0 - (0 - (points.xp)) - ((0 - 1000) * amountWanted)
            message.channel.send(`*${message.author.username} bought ${1000 * amountWanted} XP!*`)  
            }
            if ((args[0] === '1') && (points.coins > 500 * amountWanted)){
            points.coins = points.coins - (500 * amountWanted)
            points.xp = 0 - (0 - (points.xp)) - (0 - (100 * amountWanted))
            message.channel.send(`*${message.author.username} bought ${100 * amountWanted} XP!*`)  
            }
        testdatabase.query('UPDATE testusers SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
            if (err) {console.log(err); return}
        });
    });
    }
