const Discord = require('discord.js');
const client = new Discord.Client();

const triggerUrls = [
    "discord.amazingsexdating.com"
];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    for(let i = 0; i < triggerUrls.length; i++) {
        if (msg.content.includes(triggerUrls[i])) {
            console.log("ban this user");
            let scammer = msg.author;
            msg.guild.member(scammer).ban({
                reason: '1) Advertising, 2) Scamming, 3) Annoying the crap out of us',
                days: 1,
            }).then(() => {
                console.log(scammer.username + " has been banned");
            }).catch(err => {
                console.error(err);
            });
        }
    }
});

// Did you really think I'd post a bot token to GitHub publicly?
client.login(process.env.DISCORD_TOKEN);