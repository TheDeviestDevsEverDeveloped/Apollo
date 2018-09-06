const Discord = require('discord.js');
const tableclient = new Discord.Client();
const torbletclient = new Discord.Client();
const client = new Discord.Client({
disableEveryone: true
});
const pg = require('pg');
const fs = require('fs');
const database = new pg.Client({
	connectionString: process.env.REALDATABASE,
	ssl: true
});
database.connect();

const testdatabase = new pg.Client({
	connectionString: process.env.TESTDATABASE,
	ssl: true
});
testdatabase.connect();


torbletclient.on('message', message => {
  if (message.author.id !== "233366720062947330") return;
if(message.content.startsWith("mb ")){
var str = message.content.replace("mb ", "");
var res = str.split(" ");
if(res[1]){
			setTimeout(function(){ 
message.channel.send("!market buy " + res[1])
	}, 1000)
		setTimeout(function(){ 
      message.channel.send("!confirmbuy");
}, 1000)};
if(res[2]){
			setTimeout(function(){ 
message.channel.send("!market buy " + res[2])
	}, 1000)
		setTimeout(function(){ 
      message.channel.send("!confirmbuy");
}, 1000)}
if(res[3]){
			setTimeout(function(){ 
message.channel.send("!market buy " + res[3])
	}, 1000)
	setTimeout(function(){ 
      message.channel.send("!confirmbuy");
}, 1000)}
if(res[4]){
			setTimeout(function(){ 
message.channel.send("!market buy " + res[4])
	}, 1000)
	setTimeout(function(){ 
      message.channel.send("!confirmbuy");
}, 1000)}
if(res[5]){
			setTimeout(function(){ 
message.channel.send("!market buy " + res[5])
	}, 1000)
	setTimeout(function(){ 
      message.channel.send("!confirmbuy");
}, 1000)}
if(res[6]){
			setTimeout(function(){ 
message.channel.send("!market buy " + res[6])
	}, 1000)
	setTimeout(function(){ 
      message.channel.send("!confirmbuy");
}, 1000)}
if(res[7]){
			setTimeout(function(){ 
message.channel.send("!market buy " + res[7])
	}, 1000)
	setTimeout(function(){ 
      message.channel.send("!confirmbuy");
}, 1000)}
if(res[8]){
			setTimeout(function(){ 
message.channel.send("!market buy " + res[8])
	}, 1000)
	setTimeout(function(){ 
      message.channel.send("!confirmbuy");
}, 1000)}
if(res[9]){
			setTimeout(function(){ 
message.channel.send("!market buy " + res[9])
	}, 1000)
	setTimeout(function(){ 
      message.channel.send("!confirmbuy");
}, 1000)}
if(res[10]){
			setTimeout(function(){ 
message.channel.send("!market buy " + res[10])
	}, 1000)
	setTimeout(function(){ 
      message.channel.send("!confirmbuy");
}, 1000)}

	}
	if(message.content === "mshowcmds"){
message.channel.send("mshowcmds - *Shows this help list*\nmcatch - *Catches a pokemon*\nmbing - *Checks if I'm online*\nmfind - *Searches pokecord market for pokemon*\nminfo - *Displays info on pokemon of mine*\nmpokes - *Used to search specific pokemon*\nmsopa - *Displays the cheapest pokemon on the pokecord market*\nmnext - *Sends '!next'*\nmback - *Sends '!back'*\nmpoke - *Shows my pokemon*\nmembed - *Embeds a message*")
	}
	if(message.content.startsWith("mfind ")){
message.channel.send("!market search --name " + message.content.replace("mfind ", "") + " --showiv --order price a")
	}
	if(message.content.startsWith("mcatch ")){
message.channel.send("!catch " + message.content.replace("mcatch ", ""))
	}
	if(message.content.startsWith("minfo ")){
message.channel.send("!info " + message.content.replace("minfo ", ""))
	}
	if(message.content.startsWith("mpokes ")){
message.channel.send("!pokemon " + message.content.replace("mpokes ", ""))
	}
	if(message.content === "msopa"){
message.channel.send("!market search --showiv --order price a")
	}
	if(message.content === "mpoke"){
message.channel.send("!pokemon")
	}
	if(message.content === "mnext"){
message.channel.send("!next")
	}
	if(message.content === "mback"){
message.channel.send("!back")
	}
	if(message.content.startsWith("mbing")){
    message.channel.sendEmbed({
        color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
        description: "Bong!"
    })
	}
	if(message.content.startsWith("membed")){
		message.delete();
    message.channel.sendEmbed({
        color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
        description: (message.content.replace("membed ", ""))
    })
	}
});


torbletclient.login(process.env.TORBLETTOKEN);
