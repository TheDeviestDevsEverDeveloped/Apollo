exports.run = (client, message, args, testdatabase) => {
testdatabase.query(`SELECT points FROM testusers`, (err, res) => {
        if (err) {console.log(err); return}
let array = [];
res.rows.forEach(row => array.push(row.points));
array = array.sort((a, b) => {return b - a});
console.log(array[0].[0])
console.log(array[0].1)
console.log(array[0]."points")
message.channel.send(array[0]."points")
message.channel.send(array[0].1)
message.channel.send(array[0].[0])
});  
}
