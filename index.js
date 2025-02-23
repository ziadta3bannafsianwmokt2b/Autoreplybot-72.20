const { ActivityType } = require("discord.js");

client.once("ready", () => {
  console.log(`bot is online ${client.user.tag} ${client.username}`);
  console.log(`Code by @72.20`);
  console.log(`@discord.gg/witon`)

client.user.setActivity('', {
    typ: 'PLAYING', //  WATCHING STREAMING COMPETING LISTENING
  });
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];

    client.user.setActivity(randomActivity, { type: 'PLAYING' }); // 
  }, 10000);
});
client.on('error', (error) => {
  console.error('حدثت مشكله توجه الى سيرفر الدعم ومنشن @72.20, error);
});
console.log('
Wick on top 
discord.gg/witon >>programming
discord.gg/wick-c >>community
discord.gg/wick-s >>store
discord.gg/f3ayaD6q >>wicks bot support
')
client.login('توكن بوتك') 
                if (presence.activities.length > 0) {
                    console.log(chalk.magentaBright(`the activity of your bot is ${presence.activities[0].name}"`));
