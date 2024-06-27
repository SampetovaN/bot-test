const TelegramBot = require('node-telegram-bot-api');
const token = '7241986505:AAEQcYVYC7FORLH8FtHMtuKE5xBGWoN37ww';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const replyMarkup = {
        reply_markup: {
            keyboard: [
                [{ text: 'Кнопка 1' }, { text: 'Кнопка 2' }],
                [{ text: 'Кнопка 3' }]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    };
    bot.sendMessage(chatId, 'Выберите опцию:', replyMarkup);
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text === 'Кнопка 1') {
        bot.sendMessage(chatId, 'Вы нажали на Кнопку 1');
    } else if (msg.text === 'Кнопка 2') {
        bot.sendMessage(chatId, 'Вы нажали на Кнопку 2');
    } else if (msg.text === 'Кнопка 3') {
        bot.sendMessage(chatId, 'Вы нажали на Кнопку 3');
    } else {
        bot.sendMessage(chatId, 'Неизвестная команда');
    }
});