exports.run = (client, message, args, testdatabase, usedPrefix) => {
    if(message.author.id !== '233366720062947330' ) {
        message.channel.send(`You don't have proper permissions to run this command!`)
        return
    }
    const mentionedAmount = message.content.replace(`${usedPrefix}setweapon `, '')
    if(!args) {message.channel.send('You can\'t run this without any args')}

    testdatabase.query('SELECT points FROM testusers WHERE userId = $1', [message.author.id], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        console.log('After checking: ' + points);
points.weapon = mentionedAmount

    testdatabase.query('UPDATE testusers SET points = $1 WHERE userId = $2', [JSON.stringify(points), message.author.id], (err, res) => {
        if (err) {console.log(err); return}
    });
});
message.channel.send(`Set your weapon to \`${mentionedAmount}\`!`)
}
