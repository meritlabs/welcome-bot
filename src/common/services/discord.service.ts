export function isWelcomeChannel(actionChannel: any, allowedChannel: string) {
  let result: boolean;

  if (actionChannel === allowedChannel) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

export function isWelcomeMessage(messageType: string) {
  let result: boolean;

  if (messageType === 'GUILD_MEMBER_JOIN') {
    result = true;
  } else {
    result = false;
  }
  return result;
}
