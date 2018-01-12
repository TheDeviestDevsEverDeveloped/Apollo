exports.run = (client, message, args, testdatabase) => {
testdatabase.query(`SELECT * FROM testusers`).then(rows => {
  rows.sort(function(a, b){return b - a});
                message.channel.send(rows[0] + "\n" + rows[1] + "\n" + rows.userId + "\n" + rows);
        })   
}
