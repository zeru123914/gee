const { Telegraf } = require('telegraf');

// ✅ Replace with your bot token from @BotFather
const bot = new Telegraf('7716027184:AAEgmfDsdZ5NQ--65-ThAySb-LWU2RUb6PE');

// ✅ Auto Reply List (Customize Here)
const autoReplies = {
  'hi': 'sup',
  'hello': 'hey there',
  'bye': 'see ya!',
  'help': 'How can I help you?'
};

// ✅ Listen for Text Messages in Group
bot.on('text', (ctx) => {
  const message = ctx.message.text.toLowerCase();

  // ✅ Check if message matches the autoReplies list
  if (autoReplies[message]) {
    ctx.reply(autoReplies[message]);
  }
});

// ✅ Start Bot
bot.launch().then(() => {
  console.log('🤖 Bot is running...');
});

// ✅ Handle Stop Signals (Optional)
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));