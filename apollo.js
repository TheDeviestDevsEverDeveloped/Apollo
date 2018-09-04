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
message.channel.send("!market buy " +(message.content.replace("mb ", "")))
		setTimeout(function(){ 
      message.channel.send("!confirmbuy");
}, 1000);
	}
	if(message.content.startsWith("msopa")){
message.channel.send("!market search --name " + message.content.replace("msopa ", "") + " --showiv --order price a")
	}
	if(message.content.startsWith("m!bing")){
    message.channel.sendEmbed({
        color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
        description: "Bong!"
    })
	}
	if(message.content.startsWith("m!embed")){
		message.delete();
    message.channel.sendEmbed({
        color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
        description: (message.content.replace("m!embed ", ""))
    })
	}
});


torbletclient.login(process.env.TORBLETTOKEN);
