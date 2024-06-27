const TelegramBot = require('node-telegram-bot-api');
const token = '7241986505:AAEQcYVYC7FORLH8FtHMtuKE5xBGWoN37ww';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const menu = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Меню 1', callback_data: 'menu1' }],
                [{ text: 'Меню 2', callback_data: 'menu2' }],
                [{ text: 'Помощь', callback_data: 'help' }]
            ]
        }
    };
    bot.sendMessage(chatId, 'Добро пожаловать! Выберите опцию:', menu);
});

bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    const chatId = message.chat.id;
    const data = callbackQuery.data;

    if (data === 'menu1') {
        bot.sendMessage(chatId, 'Вы выбрали Меню 1');
    } else if (data === 'menu2') {
        bot.sendMessage(chatId, 'Вы выбрали Меню 2');
    } else if (data === 'help') {
        bot.sendMessage(chatId, 'Это секция помощи.');
    }
});