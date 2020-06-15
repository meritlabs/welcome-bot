# Welcome Bot

Telegram and discord bot capable of sending welcome messages when new users join selected channel.

# Getting started

To work on this project, you need:
- node.js
- yarn

Start with installing dependencies:
```
yarn 
```

Configure environment:
```
export PORT=80 # server port
export CHANNEL=my-channel # Discord channel where bot can track new users
export DISCORD_BOT_TOKEN=my-discord-token
export TELEGRAM_BOT_TOKEN=my-telegram-token
```

Run the server:
```
yarn start # for production
yarn start:dev # for development
```

The application is designed to be deployed to Heroku, but can be used on bare metal or in container.

## Contributing

Please, check out our [Contribution guide](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md).

## License

**Code released under [the MIT license](./LICENSE).**

Copyright (C) 2017 - 2020 the Merit Foundation.