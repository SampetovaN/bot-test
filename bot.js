const TelegramBot = require('node-telegram-bot-api');
const token = '7241986505:AAEQcYVYC7FORLH8FtHMtuKE5xBGWoN37ww';
const bot = new TelegramBot(token, { polling: true });

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Добро пожаловать! Я ваш бот.');
});

// Обработчик текстовых сообщений
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log('fffg', 'sssss')
    bot.sendMessage(chatId, 'Вы написали: ' + msg.text);
});