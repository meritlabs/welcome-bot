import * as Discord from 'discord.js';
import * as discordService from './common/services/discord.service';
import generateWelcomeMessage from './common/services/messages.service';
const Telegraf = require('telegraf');
const config = require('./common/env/config');

const CHANNEL = process.env.CHANNEL || config.ENV.CHANNEL;
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN || config.ENV.DISCORD_BOT_TOKEN;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || config.ENV.TELEGRAM_BOT_TOKEN;

const discordBot = new Discord.Client();
const TGBot = new Telegraf(TELEGRAM_BOT_TOKEN);

discordBot.login(DISCORD_BOT_TOKEN);
console.log(TGBot);

discordBot.on('message', message => {
  let channel: any = message.channel as any;
  let isAllowedChannel: boolean = discordService.isWelcomeChannel(channel.name, CHANNEL);
  let isWelcomeMessage: boolean = discordService.isWelcomeMessage(message.type);
  let welcomeMessage: any = generateWelcomeMessage(message.author);

  if (isAllowedChannel && isWelcomeMessage) {
    message.author.send(welcomeMessage);
  }
});
