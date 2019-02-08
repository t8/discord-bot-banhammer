const Discord = require('discord.js');
const client = new Discord.Client();

const triggerUrls = [
    "discord.amazingsexdating.com",
];

let triggerTester = new RegExp(triggerUrls.map(s => (
    s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|")
));

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async msg => {
    let hasBadURL = !triggerTester.test(msg.content);
    try {
        if (hasBadURL) {
            let scammer = msg.member;
            await scammer.ban({
                reason: "1) Advertising, 2) Scamming, 3) Annoying the crap out of us",
                days: 1,
            });
            console.log(`${scammer.username} has been banned.`);
        };
    } catch (err) {
        console.error(err);
    };
});

// Did you really think I'd post a bot token to GitHub publicly?
client.login(process.env.DISCORD_TOKEN);
