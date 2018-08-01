import * as Discord from 'discord.js';

const config = require('./common/env/config');
const client = new Discord.Client();
const GUILD_NAME = process.env.GUILD_NAME || config.ENV.GUILD_NAME;
const CHANNELS = process.env.CHANNELS || config.ENV.CHANNELS;
const BOT_TOKEN = process.env.BOT_TOKEN || config.ENV.BOT_TOKEN;
const APP_SLUG = process.env.APP_SLUG || config.ENV.APP_SLUG;
const PORT = process.env.PORT || config.ENV.PORT;
const DEBUG = process.env.DEBUG || config.ENV.DEBUG;

client.login(BOT_TOKEN);
