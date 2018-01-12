exports.run = (client, message, args, testdatabase) => {
testdatabase.query(`SELECT points FROM testusers`, (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows
points.sort(function(a, b){return b - a});
message.channel.send(points[0])
});  
}
