exports.run = (client, message, args) => {
    if (!args[0]) {
        message.channel.send('**DMing you a list of commands!**');
        message.author.sendEmbed({
            color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
            description: "Commands:\nshop (Displays your shop)\nbuy(Used to buy stuff from shop)\ndaily (Collect daily rewards)\nredeemreward (Redeems one of your rewards)\nCoinflip (Betting)\nguessnumber (Betting)\nAttack (Attacks your current enemy)\nsetprefix (Sets your prefix)\noverwriteprefix (Owner)\naddaward (Owner)\nhelp (Sends this message)\npartner (More info on a partner)*__Coming Soon:tm:__*\npartners (Shows a list of partners)*__Coming Soon:tm:__*\nping (Shows bot's ping)\nreset (Owner)\nsay (Owner)\nsetlevels (Owner)\nsetpoints (Owner)"
        });
    }
    if (args[0] == 'test') {
        message.channel.send('Test failed');
    }
};
