import TelegramBot from 'node-telegram-bot-api';
import {ChatGPTAPI} from 'chatgpt'

(async () => {
    const token = '6028046450:AAFUSxUVynK-2lR6psc4xo5e6ZDBzeC5sKo';
    const bot = new TelegramBot(token, {polling: true});
    const api = new ChatGPTAPI({
        apiKey: "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"
    })

    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        console.log(msg.text)
        const messageFromGpt = await api.sendMessage(msg.text)
        await bot.sendMessage(chatId, messageFromGpt.text);
    });

})();