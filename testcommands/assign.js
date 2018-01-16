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
            if (points.levelPoints < amountWanted){
            message.channel.send(`*${message.author.username}, you don't have enough Attribute Points*`)
            return;
            }
            if ((args[0].toLowerCase() === 'damage') && (points.levelPoints > amountWanted)){
                points.levelPoints = points.levelPoints - amountWanted
                points.pointsIntoDamage = pointsIntoDamage - (0 - amountWanted)
                message.channel.send(`*${message.author.username} assigned ${amountWanted} points to their damage attribute!*`)  
                }
            if ((args[0].toLowerCase() === 'xp') && (points.levelPoints > amountWanted)){
                points.levelPoints = points.levelPoints - amountWanted
                points.pointsIntoDamage = pointsIntoDamage - (0 - amountWanted)
                message.channel.send(`*${message.author.username} assigned ${amountWanted} points to their xp attribute!*`)  
                }
            if ((args[0].toLowerCase() === 'coins') && (points.levelPoints > amountWanted)){
                points.levelPoints = points.levelPoints - amountWanted
                points.pointsIntoDamage = pointsIntoDamage - (0 - amountWanted)
                message.channel.send(`*${message.author.username} assigned ${amountWanted} points to their coin attribute!*`)  
                }
            if ((args[0].toLowerCase() === 'shield') && (points.levelPoints > amountWanted)){
                points.levelPoints = points.levelPoints - amountWanted
                points.pointsIntoDamage = pointsIntoDamage - (0 - amountWanted)
                message.channel.send(`*${message.author.username} assigned ${amountWanted} points to their shield attribute!*`)  
                }
        testdatabase.query('UPDATE testusers SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
            if (err) {console.log(err); return}
        });
    });
    }
