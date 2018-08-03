import * as Discord from 'discord.js';
import * as discordService from './common/services/discord.service';
import generateWelcomeMessage from './common/services/messages.service';

const config = require('./common/env/config');
const client = new Discord.Client();
const GUILD_NAME = process.env.GUILD_NAME || config.ENV.GUILD_NAME;
const CHANNEL = process.env.CHANNEL || config.ENV.CHANNEL;
const BOT_TOKEN = process.env.BOT_TOKEN || config.ENV.BOT_TOKEN;
const APP_SLUG = process.env.APP_SLUG || config.ENV.APP_SLUG;
const PORT = process.env.PORT || config.ENV.PORT;
const DEBUG = process.env.DEBUG || config.ENV.DEBUG;

client.login(BOT_TOKEN);

client.on('message', message => {
  let channel: any = message.channel as any;
  let isAllowedChannel: boolean = discordService.isWelcomeChannel(channel.name, CHANNEL);
  let isWelcomeMessage: boolean = discordService.isWelcomeMessage(message.type);
  let welcomeMessage: any = generateWelcomeMessage(message.author);

  if (isAllowedChannel && isWelcomeMessage) {
    message.author.send(welcomeMessage);
  }
});
