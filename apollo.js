const Discord = require('discord.js');

const client = new Discord.Client({

disableEveryone: true

});

const pg = require('pg');

const fs = require('fs');

//Custom error catcher function

function error(err) {

const errorembed = new Discord.RichEmbed()
.setColor(color)
.setTitle('New Error Caught!')
.setTimestamp()
.setDescription(`\`\`\`xl\n${err.stack}\`\`\``);

client.channels.get('385485532458778626').send({
embed: errorembed
});

}

//Event Handler

fs.readdir('./events/', (err, files) => {
if (err) return console.error(err);

files.forEach(file => {
const eventFunction = require(`./events/${file}`);
const eventName = file.split('.')[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
});
});

client.login(process.env.TOKEN);

module.exports.error = error;

const testclient = new Discord.Client({

disableEveryone: true

});


//Custom error catcher function

function error(err) {

const testerrorembed = new Discord.RichEmbed()
.setColor(color)
.setTitle('New Error Caught!')
.setTimestamp()
.setDescription(`\`\`\`xl\n${err.stack}\`\`\``);

testclient.channels.get('385485532458778626').send({
embed: testerrorembed
});

}

//Event Handler

fs.readdir('./events/', (err, files) => {
if (err) return console.error(err);

files.forEach(file => {
const eventFunction = require(`./events/${file}`);
const eventName = file.split('.')[0];
testclient.on(eventName, (...args) => eventFunction.run(testclient, ...args));
});
});

testclient.login(process.env.TESTTOKEN);

module.exports.error = error;
