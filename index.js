const TelegramBot = require('node-telegram-bot-api');
const token = '1267569554:AAH-hVx_mWPXUKnddKhQq8Tmc6Bv4gVFdTg';
const bot = new TelegramBot(token, {
  polling: true
});

var fs = require('fs');

bot.on('message', (msg) => {
  var Hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.from.id, "Hello  " + msg.from.first_name);
  }
  var bye = "bye";
  if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
  }
});


bot.onText(/\/start/, (msg) => {
  // console.log(msg)
  bot.sendMessage(msg.chat.id, "Welcome")
  bot.sendMessage(msg.chat.id, "/sendpic")
  bot.sendMessage(msg.chat.id, "/calculate operation")
  bot.sendMessage(msg.chat.id, "/location")
});


bot.onText(/\/location/, (msg) => {
  bot.sendLocation(msg.chat.id, 44.97108, -104.27719);
  bot.sendMessage(msg.chat.id, "Here is the point");
});


bot.onText(/\/calculate/, (msg) => {
  var text_msg = msg.text
  var operation = text_msg.split("calculate ")[1]
  var result = eval(operation);
  var final_result = `${operation}=${result}`
  let operator = {
    "operator": final_result
  };
  bot.sendMessage(msg.chat.id, final_result) 
  var new1 = (operator["operator"])
  let data = fs.readFileSync('operations.json')
  data = data.toString();
  let Data = JSON.parse(data)
  Data.push(new1)
  fs.writeFileSync("operations.json", JSON.stringify(Data, null, 2))
});


bot.onText(/\/sendpic/, (msg) => {
  bot.sendPhoto(msg.chat.id, "https://tinyjpg.com/images/social/website.jpg", {
    caption: "Here we go ! \nThis is just a caption "
  });
});


bot.onText(/\/history/, (msg) => {
  // console.log(msg)
  if (msg.chat.id===1317762373) {
  let data = fs.readFileSync('operations.json')
  data = data.toString();
  let Data = JSON.parse(data)
  {Data.map((a) => bot.sendMessage(msg.chat.id,a))}
  }
  else{
    bot.sendMessage(msg.chat.id,"another user will not get history")
  }
});