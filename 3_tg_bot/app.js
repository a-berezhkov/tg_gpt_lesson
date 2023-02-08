import TelegramBot from 'node-telegram-bot-api';

const token = 'ваш_API_ключ_вписать_сюда';
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, msg.text);
});

bot.onText(/\/pic/, (msg) => {
    bot.sendPhoto(msg.chat.id, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKu-n3C27RN2znzW4miiqIpVBBf60GX5MOA&usqp=CAU");
});

