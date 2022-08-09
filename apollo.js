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

torbletclient.on("ready", () => {
  console.log("Cool with a K? More like Fool that is gay!");
});

    let answ = [
"If we talking about outdoor pets, I got a fuck lot of bird",
"FOX",
"B)",
"Chrisu wanna get  high together on my 18th bday",
"foxes are rather cute",
"still cute",
"well",
"I want a fox as a pet. We have a few in my yard from time to time. So they are my outdoor pets",
"aw",
"yes",
"ew  is that your tribal name",
"*weebs*",
"NICO NICO NEEEEE",
"more like",
"neko",
"*literally uses a neko emote*",
"Weebs",
"Thankss",
"Gg",
"gj",
"Thank you",
"Gg",
"LOL, you just got to **level 26**. Do you feel accomplished? Do you feel proud?",
"rip",
".f",
"I ate him",
"I miss you umbra ",
"kuru kuru",
"necromancer aint mages",
"That was bad lmfao",
"ha ha ha..",
"A Nekomancer",
"eh",
"What do you call a cat mage",
"Lol ty",
"Guys",
"Suuuup bitches",
"hbd in advance too",
"If I forget tomorrow lol",
"Damn Chrisu happy birthday in advance",
"My birthday is tomorrow. We close to same date",
"tyty",
"Happy birthday. ",
"Happy birthday sugar!",
"thank you",
"And thanks for boosting",
"Hope you enjoy your day",
"Ohh happy birthday!!",
"thanks everyone for your bday messages, i gave the server a boost",
"conversation kind of died",
"it's from the tv series",
"hype?",
"oh",
"hot?",
"unlike link",
"WHy does link look so",
"Okay",
"WEEB",
"nerd",
"that's the better version",
"Or someone else ;-;",
"Wanna play rock paper scissors ",
"Ya",
"bigger and frizzier",
"na rock would be much bigger",
"Something",
"Rock",
"Umm",
"oh",
"And the hairhihi",
"i finally finished cooking dinner ",
"Hmm thats pretty sus",
"But the way she wants to cuddle hmm",
"She didn't seeme like homo",
"Idk",
"Jk",
"Jeez alright",
"XD",
"To approach ma baby",
"I suppouse it has balls",
"Enough",
"Fair enought",
"Imma chek it tomorrow if i catch it xD",
"Haven't thought that",
"Ouh",
"You sure the other cat is a boy?",
"My cat has a simp",
"I agree",
"In my case names aren't logical xD",
"I get it",
"Oh",
"Just have a bad memory for stuff which isnt logical",
"Oh not really",
"When you read book and see a buterfly xD",
"Its when things distract you and you forget other stuff",
"Uhm",
"Hmm?",
"So you are moony?",
"Ouh"
]





torbletclient.on('message', message => {
  if (message.author.id !== "233366720062947330") return;
if(message.content.startsWith("mb ")){
var str = message.content.replace("mb ", "");
const res = str.split(" ");
	for (let i = 0; i < 25; i++) {
	setTimeout(function(){
message.channel.send(answ[Math.floor(Math.random() * answ.length)])
		console.log(res)
  }, ((i+1)*2000))}
	clearTimeout();
	setTimeout(function(){
      message.channel.send("!confirmbuy");
}, ((res.length + 2) * 2000));
	clearTimeout();
	}
if(message.content.startsWith("mtest ")){
	setTimeout(function(){ 

	
    message.channel.send(answ[Math.floor(Math.random() * answ.length)])
  

	
	
	}, 2000)
	clearTimeout();
	setTimeout(function(){ 
      message.channel.send("reeeep 2");
}, 2000);
	}
if(message.content.startsWith("!duel ")){
	setTimeout(function(){ 
message.channel.send("!accept")
	}, 1000)
}
if(message.content.startsWith("!use ")){
	setTimeout(function(){ 
message.channel.send("!use 1")
	}, 1000)
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
