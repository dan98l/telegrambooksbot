const TelegramBot = require('node-telegram-bot-api');

const token = '517905898:AAFEpoBmcUzC68DCvtGp0wkECMP_sIbdWSM';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Не-не-не, я жив!');
});