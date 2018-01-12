exports.run = (client, message, args, testdatabase) => {
testdatabase.query(`SELECT * FROM users ORDER BY userId`).then(rows => {
                message.channel.send(rows[0] + "\n" + rows[1] + "\n" + rows);
        })   
}
