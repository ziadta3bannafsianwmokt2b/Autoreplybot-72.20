# Autoreplybot-72.20
## لاضافه رد لتقائي يجب عليك انت تنسخ الكود :
js: 
client.on('messageCreate', message => {
    
    if (message.author.bot) return;

    
    if (message.content === '')//اكتب هنا اللي يكتبه الشخص {
        message.channel.send('') // الرد من البوت

    }
});
