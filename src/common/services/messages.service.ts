export default function generateWelcomeMessage(author) {
  let message = `Hi *${author}*!  Welcome to Merit!
\nTo help you get started, we’ve assembled some resources for you.
\nSome basics:
\n1. Merit is an invite only community, someone must send you an invite token in order to unlock your wallet 
and validate it on the Merit blockchain before you can send, receive, or mine MRT.  
Invites are distributed among the community via our mining algorithm. 
The easiest way to get invites to share with your friends is to ask the person who invited you.  
To check who that is go to: http://blockstats.merit.me/wallet and enter your address or alias.
\n2. Don't have a wallet? https://www.merit.me/blog/setting-up-your-first-merit-wallet/
\n3. You should read our FAQ! https://www.merit.me/faq
\n4. If you are interested in mining: we have CPU mining and GPU mining for NVIDIA in 
the lightwallet and are working on additional mining resources.
\n5. One-click mining is available in both the desktop lightwallet and core wallet.
You cannot mine from the web wallet. Get the wallets here: https://www.merit.me/get-started/
\n6. You can trade BTC for MRT on the Merit Market https://market.merit.me/dashboard
\n7. If you have questions, let us know!`;
  return message;
}
