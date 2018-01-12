exports.run = (client, message, args, testdatabase) => {
    const Discord = require('discord.js');
    if(message.mentions.users.size > 0){
        var mentionedID = message.mentions.users.first().id
        var mentionedUsername = message.mentions.users.first().username
    } else {
        var mentionedID = message.author.id
        var mentionedUsername = message.author.username
    }
    testdatabase.query('SELECT points FROM testusers WHERE userId = $1', [mentionedID], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        if(points.weapon = 1){
        var weaponEquipped = "Wooden Sword"
        }
        if(points.weapon = 2){
        var weaponEquipped = "Copper Sword"
        }
        if(points.weapon = 3){
        var weaponEquipped = "Iron Sword"
        }
        if(points.weapon = 4){
        var weaponEquipped = "Steel Sword"
        }
        if(points.weapon = 5){
        var weaponEquipped = "Diamond Sword"
        }
        if(points.weapon = 6){
        var weaponEquipped = "Platinum Sword"
        }
        if(points.weapon = 7){
        var weaponEquipped = "Crystal Sword"
        }
        if(points.weapon = 500){
        var weaponEquipped = "The Code"
        } else {
        var weaponEquipped = "Nothing. Nothing at all."
        }
                let coinsNeeded = (((points.level + 1) * 10)**2)
        const profileEmbed = new Discord.RichEmbed()
.setTitle(`${mentionedUsername}'s profile`)
.addField(`HP: `, `${points.playerHealth}`)
.addField(`VIP Level: `, `${points.vipLevel}`)
.addField(`Current Level: `, `${points.level}`)
.addField(`Current Points: `, `${points.points}`)
.addField(`Awards: `, `${points.awards}`)
.addField(`XP: `, `${points.xp}`)
.addField(`Coins: `, `${points.coins}`)
.addField(`Enemy: `, `${points.enemyName}`)
.addField(`Weapon: `, `${weaponEquipped} ${points.weapon}`)
.addField(`XP needed to level up: `, `${coinsNeeded} XP`)
.setTimestamp()
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        let usrPoints = points.points
        let usrLevel = points.level
        let usrAwards = points.awards
        let usrKills = points.zombiesSlain
        let usrCoins = points.coins
        let usrXP = points.xp
         if(points.level > 10){
message.channel.send(`\`\`\`${mentionedUsername}'s profile:\nVIP Level: ${points.vipLevel}\nCurrent Level: ${usrLevel}\nCurrent Points: ${usrPoints}\nAwards:${usrAwards}\nZombies slain: ${usrKills}\nXP: ${usrXP}\nCoins: ${usrCoins}\nXP needed to level up: ${coinsNeeded} XP\`\`\``)
        } else if(message.author.id === '233366720062947330'){
message.channel.send(profileEmbed)
        } else {
message.channel.send(`${mentionedUsername}'s profile:\nVIP Level: ${points.vipLevel}\nCurrent Level: ${usrLevel}\nCurrent Points: ${usrPoints}\nAwards:${usrAwards}\nZombies slain: ${usrKills}\nXP: ${usrXP}\nCoins: ${usrCoins}\nXP needed to level up: ${coinsNeeded} XP`)
        }
    
    
    });
}
