export default function generateWelcomeMessage(author) {
  let message = `Hi *${author.username}*!  Welcome to Merit!\n
  To help you get started, we’ve assembled some resources for you.\n
  Some basics:\n
  1. Merit is an invite only community, someone must send you an invite token in order to unlock your wallet and validate it on the Merit blockchain before you can send, 
  receive, or mine MRT.  Invites are distributed among the community via our mining algorithm. The easiest way to get invites to share with your friends is to ask the person 
  who invited you.  To check who that is go to: http://blockstats.merit.me/wallet and enter your address or alias.\n
  2. You should read our FAQ! https://www.merit.me/faq\n
  3. If you are interested in mining: we have CPU mining and GPU mining for NVIDIA in the lightwallet and are working on additional mining resources.\n
  4. One-click mining is available in both the desktop lightwallet and core wallet.  You cannot mine from the web wallet. Get the wallets here: https://www.merit.me/get-started/\n
  5. You can trade BTC for MRT on the Merit Market https://market.merit.me/dashboard\n
  6. If you have questions, let us know!
  `;
  return message;
}
