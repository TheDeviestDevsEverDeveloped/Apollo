const Discord = require('discord.js');
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

//Custom error catcher function

function error(err) {

const errorembed = new Discord.RichEmbed()
.setColor(color)
.setTitle('New Error Caught!')
.setTimestamp()
.setDescription(`\`\`\`xl\n${err.stack}\`\`\``);

client.channels.get('401012460426887178').send({
embed: errorembed
});

}

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on('ready', () => {
	database.query('CREATE TABLE IF NOT EXISTS users(userId VARCHAR(18) UNIQUE, points TEXT)', (err, res) => {
		if (err) throw err;
	});
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') {
        clbot.configure({
            botapi: 'CC5t7pEnGxIq-mjrBf89H2pDcWQ'
        });
        Cleverbot.prepare(() => {
            clbot.write(message.content, (response) => {
                message.channel.startTyping();
                setTimeout(() => {
                    message.channel.sendMessage(response.message).catch(console.error);
                    message.channel.stopTyping();
                }, Math.random() * (1 - 3) + 1 * 1000);
            });
        });
	    return;
    }
    database.query('SELECT points FROM users WHERE userId = $1', [message.author.id], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
		console.log('Before checking: '+points);
    if (!points) {        
      points = {
      points: 0,
      level: 1,
      awards: "None",
      prefix: "r!",
      xp: 0,
      coins: 0,
      dailyCooldown: new Date().getTime(),
      zombieCooldown: new Date().getTime(),
      coinflipCooldown: new Date().getTime(),
      guessnumberCooldown: new Date().getTime(),
      rewardsAvailable: 0,
      rewardLevel: 1,
      xpBoostLevel: 1,
      coinBoostLevel: 1,
      vipLevel: 1
  };

		database.query('INSERT INTO users (points, userId) VALUES ($1, $2)', [JSON.stringify(points), message.author.id]);
    }

        else points = JSON.parse(res.rows[0].points);
		console.log('After checking: '+points);
        points.points++;	   
    
        if(points.points > 5){
          points.points = 0
          points.coins++
        }
	    let thisVariable = (((points.level + 1) * 10)**2)
        if(points.xp > thisVariable){
          let awardedCoins = (Math.floor(Math.random() * (500 - 1 + 1))) + 1;
          points.xp = 0 - (0 - (points.xp - thisVariable))
          points.level++
          points.coins = points.coins + awardedCoins
          message.reply(`<:levelup:380391015409909760>You just leveled up to level ${points.level}! Have some free coins.<:levelup:380391015409909760>`)
        }
      database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), message.author.id], (err, res) => {
          if (err) {console.log(err); return}
      });
        if((!message.content.startsWith(';;')) && (!message.content.startsWith(points.prefix))) return;
if(message.content.startsWith(';;')) {
	let usedPrefix = ';;'
        const args = message.content.slice(usedPrefix.length).trim().split(/ +/g);
        const command = (!message.content.startsWith('r!level'))?args.shift().toLowerCase():[database];

        try {
            let commandFile = require(`./commands/${command}`);
            commandFile.run(client, message, args, database, usedPrefix);
        } catch (err) {
            client.channels.get('401012460426887178').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${message.content}\nMessage author: ${message.author.tag} ID: ${message.author.id}\n \`\`\`${err.stack}\`\`\``);
        }
}
else if(message.content.startsWith(points.prefix)) {
	let usedPrefix = points.prefix
	const args = message.content.slice(usedPrefix.length).trim().split(/ +/g);
        const command = (!message.content.startsWith('r!level'))?args.shift().toLowerCase():[database];

        try {
            let commandFile = require(`./commands/${command}`);
            commandFile.run(client, message, args, database, usedPrefix);
        } catch (err) {
            client.channels.get('401012460426887178').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${message.content}\nMessage author: ${message.author.tag} ID: ${message.author.id}\n \`\`\`${err.stack}\`\`\``);
        }
}
    });
});

client.on('messageUpdate', (oldMsg, newMsg) => {
  if (newMsg.author.bot) return;
  if (newMsg.content.indexOf(';;') !== 0) return;

  const args = newMsg.content.slice(';;'.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}`);
    commandFile.run(client, newMsg, args);
  } catch (err) {
    client.channels.get('401012460426887178').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${newMsg.content}\nMessage author: ${newMsg.author.tag} ID: ${newMsg.author.id}\n \`\`\`${err.stack}\`\`\``);
  }
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

testclient.channels.get('401012460426887178').send({
embed: testerrorembed
});

}

fs.readdir("./testbotevents/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./testbotevents/${file}`);
    let eventName = file.split(".")[0];
    testclient.on(eventName, (...args) => eventFunction.run(testclient, ...args));
  });
});

testclient.on('ready', () => {
	testdatabase.query('CREATE TABLE IF NOT EXISTS testusers(userId VARCHAR(18) UNIQUE, points TEXT)', (err, res) => {
		if (err) throw err;
	});
});

testclient.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') {
        clbot.configure({
            botapi: 'CC5t7pEnGxIq-mjrBf89H2pDcWQ'
        });
        Cleverbot.prepare(() => {
            clbot.write(message.content, (response) => {
                message.channel.startTyping();
                setTimeout(() => {
                    message.channel.sendMessage(response.message).catch(console.error);
                    message.channel.stopTyping();
                }, Math.random() * (1 - 3) + 1 * 1000);
            });
        });
	    return;
    }
    testdatabase.query('SELECT points FROM testusers WHERE userId = $1', [message.author.id], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
		console.log('Before checking: '+points);
    if (!points) {        
      points = {
      points: 0,
      level: 1,
      awards: "None",
      prefix: "r!",
      xp: 0,
      coins: 0,
      dailyCooldown: new Date().getTime(),
      zombieCooldown: new Date().getTime(),
      coinflipCooldown: new Date().getTime(),
      guessnumberCooldown: new Date().getTime(),
      rewardsAvailable: 0,
      rewardLevel: 1,
      xpBoostLevel: 1,
      coinBoostLevel: 1,
      vipLevel: 1
  };

		testdatabase.query('INSERT INTO testusers (points, userId) VALUES ($1, $2)', [JSON.stringify(points), message.author.id]);
    }

        else points = JSON.parse(res.rows[0].points);
		console.log('After checking: '+points);
        points.points++;	   
    
        if(points.points > 5){
          points.points = 0
          points.coins++
        }
	    let thisVariable = (((points.level + 1) * 10)**2)
        if(points.xp > thisVariable){
          let awardedCoins = (Math.floor(Math.random() * (500 - 1 + 1))) + 1;
          points.xp = 0 - (0 - (points.xp - thisVariable))
          points.level++
          points.coins = points.coins - (0 - awardedCoins)
          message.reply(`<:levelup:380391015409909760>You just leveled up to level ${points.level}! Have some free coins.<:levelup:380391015409909760>`)
        }
      testdatabase.query('UPDATE testusers SET points = $1 WHERE userId = $2', [JSON.stringify(points), message.author.id], (err, res) => {
          if (err) {console.log(err); return}
      });
        if((!message.content.startsWith('::')) && (!message.content.startsWith(points.prefix))) return;
if(message.content.startsWith('::')) {
	let usedPrefix = '::'
        const args = message.content.slice(usedPrefix.length).trim().split(/ +/g);
        const command = (!message.content.startsWith('r!level'))?args.shift().toLowerCase():[database];

        try {
            let commandFile = require(`./testcommands/${command}`);
            commandFile.run(testclient, message, args, testdatabase, usedPrefix);
        } catch (err) {
            testclient.channels.get('401012460426887178').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${message.content}\nMessage author: ${message.author.tag} ID: ${message.author.id}\n \`\`\`${err.stack}\`\`\``);
        }
}
else if(message.content.startsWith(points.prefix)) {
	let usedPrefix = points.prefix
	const args = message.content.slice(usedPrefix.length).trim().split(/ +/g);
        const command = (!message.content.startsWith('r!level'))?args.shift().toLowerCase():[database];

        try {
            let commandFile = require(`./testcommands/${command}`);
            commandFile.run(testclient, message, args, database, usedPrefix);
        } catch (err) {
            testclient.channels.get('401012460426887178').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${message.content}\nMessage author: ${message.author.tag} ID: ${message.author.id}\n \`\`\`${err.stack}\`\`\``);
        }
}
    });
});

testclient.on('messageUpdate', (oldMsg, newMsg) => {
  if (newMsg.author.bot) return;
  if (newMsg.content.indexOf('::') !== 0) return;

  const args = newMsg.content.slice('::'.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./testcommands/${command}`);
    commandFile.run(testclient, newMsg, args);
  } catch (err) {
    testclient.channels.get('401012460426887178').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${newMsg.content}\nMessage author: ${newMsg.author.tag} ID: ${newMsg.author.id}\n \`\`\`${err.stack}\`\`\``);
  }
});

testclient.login(process.env.TESTTOKEN);

module.exports.error = error;
