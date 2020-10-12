const TelegramBot = require('node-telegram-bot-api'); 
const token = '1267569554:AAH-hVx_mWPXUKnddKhQq8Tmc6Bv4gVFdTg';
const bot = new TelegramBot(token, {polling: true});



bot.on('message', (msg) => {
  var Hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.from.id, "Hello  " + msg.from.first_name);
  }
  var bye = "bye";
  if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
  } 
  var robot = "I'm robot";
  if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
  }
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome")
  bot.sendMessage(msg.chat.id,"/sendpic")
  bot.sendMessage(msg.chat.id,"/sendaudio")
  bot.sendMessage(msg.chat.id,"/calculate")
  bot.sendMessage(msg.chat.id,"/location")

});

bot.onText(/\/location/,(msg)=>{
  bot.sendLocation(msg.chat.id,44.97108, -104.27719);
  bot.sendMessage(msg.chat.id, "Here is the point");
});

bot.onText(/\/calculate/, (msg) => {
  var text_msg= msg.text
  var operation = text_msg.split("calculate ")[1]
  var result = eval(operation);
  var final_result = `${operation}=${result}`
  bot.sendMessage(msg.chat.id, final_result) 
});


bot.onText(/\/sendpic/, (msg) => {
  bot.sendPhoto(msg.chat.id,"https://tinyjpg.com/images/social/website.jpg",{caption : "Here we go ! \nThis is just a caption "} );
});


bot.onText(/\/sendaudio/,(msg)=>{ 
  bot.sendAudio(msg.chat.id,"https://gaana.com/song/clash-57")
});
