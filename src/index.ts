import * as Discord from 'discord.js';
import * as discordService from './common/services/discord.service';
import generateWelcomeMessage from './common/services/messages.service';

const config = require('./common/env/config');
const CHANNEL = process.env.CHANNEL || config.ENV.CHANNEL;
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN || config.ENV.DISCORD_BOT_TOKEN;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || config.ENV.TELEGRAM_BOT_TOKEN;
const TelegramBot = require('node-telegram-bot-api');
const TGbot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
const discordBot = new Discord.Client();

TGbot.on('message', async msg => {
  let getMsg = new Promise(res => {
    let interval = setInterval(() => {
      if (msg.new_chat_member) {
        clearInterval(interval);
        res(msg.new_chat_member);
      }
    }, 300);
  });
  let newChatMember: any = await getMsg;
  if (newChatMember) {
    let user = `@${newChatMember.first_name} ${newChatMember.last_name}`;
    let message = generateWelcomeMessage(user);

    TGbot.sendMessage(msg.chat.id, message, {
      parse_mode: 'markdown',
    });
  }
});

discordBot.login(DISCORD_BOT_TOKEN);
discordBot.on('message', message => {
  let channel: any = message.channel as any;
  let isAllowedChannel: boolean = discordService.isWelcomeChannel(channel.name, CHANNEL);
  let isWelcomeMessage: boolean = discordService.isWelcomeMessage(message.type);
  let welcomeMessage: any = generateWelcomeMessage(message.author.username);

  if (isAllowedChannel && isWelcomeMessage) {
    message.author.send(welcomeMessage);
  }
});
