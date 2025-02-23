const { ActivityType } = require("discord.js");

client.once("ready", () => {
  console.log(`bot is online! ${client.user.tag}!`);
  console.log(`Code by 72.20`);
  console.log(`@discord.gg/witon`)

client.user.setActivity('', {
    typ: 'PLAYING', // ممكن تغير الحالة من هنا WATCHING STREAMING COMPETING LISTENING
  });
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];

    client.user.setActivity(randomActivity, { type: 'PLAYING' }); // غيرها من هنا ولازم تكون متابقه للي فوق
  }, 10000);
});
client.login('توكن بوتك')
