const { Client , GatewayIntentBits , Partials } = require ('discord.js')
const client = new Client({
    intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent', GatewayIntentBits.Guilds],
    partials: [Partials.Channel],
  });
  exports.client = client;


console.log(`
                     .___         ___.                  _________ ________        ________  _______   
  _____  _____     __| _/  ____   \_ |__   ___.__.  /\  \______  \\_____  \       \_____  \ \   _  \  
 /     \ \__  \   / __ | _/ __ \   | __ \ <   |  |  \/      /    / /  ____/        /  ____/ /  /_\  \ 
|  Y Y  \ / __ \_/ /_/ | \  ___/   | \_\ \ \___  |  /\     /    / /       \       /       \ \  \_/   \
|__|_|  /(____  /\____ |  \___  >  |___  / / ____|  \/    /____/  \_______ \  /\  \_______ \ \_____  /
      \/      \/      \/      \/       \/  \/                             \/  \/          \/       \/ 
`);
console.log('your bot is ready!');
console.log('code by 72.20');
console.log (`Discord id >> 877717735801487360`)
console.log(`progarmming >>  discord.gg/witon
services >> discord.gg/wick-s
community >> discord.gg/wick-c
wicks support >> discord.gg/kcz9VEBHp5`)


client.on('messageCreate', message => {
    
    if (message.author.bot) return;

    
    if (message.content === '!ping') {
        message.channel.send('!Pong ${client.ws.ping}')

    }
});
client.on('messageCreate', message => {
    
    if (message.author.bot) return;

    
    if (message.content === 'السلام عليكم') {
        message.channel.send('وعليكم السلام')

    }
});
client.on('messageCreate', message => {
    
    if (message.author.bot) return;

    
    if (message.content === '') {
        message.channel.send('')

    }
});
client.login(""); // التوكن بتاعك
