exports.run = (client, message, args, database, usedPrefix) => {
    
        const mentionedID = message.author.id

        
        testdatabase.query('SELECT points FROM testusers WHERE userId = $1', [mentionedID], (err, res) => {
            if (err) {console.log(err); return}
            let points = res.rows[0];
            if(!points){message.channel.send('This user currently has no database stats')}
            else points = JSON.parse(res.rows[0].points);
        let rewardCoins = (points.coinBoostLevel * (Math.floor(Math.random() * (10 - 1 + 1))) + 1);
        let rewardXP = (points.xpBoostLevel * (Math.floor(Math.random() * (10 - 1 + 1))) + 1);
        let playerDamageDealt = (points.weapon * (Math.floor(Math.random() * (10 - 1 + 1))) + 1);
        let enemyDamageDealt = ((Math.floor(Math.random() * (10 - 1 + 1))) + 1);
            var countDownDate = points.zombieCooldown
                
                  var now = new Date().getTime();
                
                  var distance = countDownDate - now;
                
                  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            var noww = new Date().getTime();
            
            if(countDownDate < noww){
            if(points.zombieCooldown < noww){
            points.enemyHealth = points.enemyHealth - damageDealt
            if(points.enemyHealth > 0){
            message.channel.send(`*${message.author.username} attacked a ${points.enemyName} and dealt ${playerDamageDealt} damage, but took ${enemyDamageDealt} damage!*`)
            points.enemyHealth = points.enemyHealth - playerDamageDealt
            points.playerHealth = points.playerHealth - enemyDamageDealt
            }
            points.zombieCooldown = new Date().getTime() + 5000
            if(points.enemyHealth < 1){
            points.playerHealth = points.playerHealth - enemyDamageDealt
            points.xp = points.xp - (0 - rewardXP)
            points.coins = points.coins - (0 - rewardCoins)
            points.enemyHealth = 100
            message.channel.send(`*${message.author.username} killed a ${points.enemyName} and gathered ${rewardCoins} Coins and ${rewardXP} XP!*`)            
            }}
        } else {
            message.channel.send(`Gotta wait ${seconds} more seconds`)
        }
        testdatabase.query('UPDATE testusers SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
            if (err) {console.log(err); return}
        });
    });
    }
