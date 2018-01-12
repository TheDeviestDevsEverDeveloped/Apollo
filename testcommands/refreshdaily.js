exports.run = (client, message, args, testdatabase) => {
    if(message.author.id !== '233366720062947330' ) return
    const mentionedID = message.mentions.users.first().id
    const mentionedAmount = args[1]
    if(!args) {message.channel.send('You can\'t run this without any args')}

    testdatabase.query('SELECT points FROM testusers WHERE userId = $1', [mentionedID], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
            points.dailyCooldown = new Date().getTime()

    testdatabase.query('UPDATE testusers SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
        if (err) {console.log(err); return}
    });
});
message.channel.send(`Reset daily for: ${mentionedID}!`)
}
