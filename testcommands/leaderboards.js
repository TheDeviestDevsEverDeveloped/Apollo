exports.run = (client, message, args, testdatabase) => {
testdatabase.query(`SELECT points FROM testusers`, (err, res) => {
        if (err) {console.log(err); return}
let array = [];
res.rows.forEach(row => array.push(row.points));
array = array.sort((a, b) => {return b - a});
var stats, levelll;
stats = array[0];
levelll = stats.level;
message.channel.send(levelll)
});  
}
