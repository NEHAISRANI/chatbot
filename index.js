const TelegramBot = require('node-telegram-bot-api'); 
const token = '1267569554:AAH-hVx_mWPXUKnddKhQq8Tmc6Bv4gVFdTg';
const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
  var hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
  bot.sendMessage(msg.chat.id,"Hello dear user");
  } 
      
  var bye = "bye";
  if (msg.text.toString().toLowerCase().includes(bye)) {
  bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
  } 
  
  bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome");
  });
  
  bot.onText(/\/sendpic/, (msg) => {
    bot.sendPhoto(msg.chat.id,"https://tinyjpg.com/images/social/website.jpg",{caption : "Here we go ! \nThis is just a caption "} );
  });

  bot.onText(/\/sendaudio/,(msg)=>{
    bot.sendAudio(msg.chat.id,"https://gaana.com/song/clash-57")
  })
  
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
        "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
        }
    });
    bot.on('message', (msg) => {
      var Hi = "hi";
      if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
          bot.sendMessage(msg.chat.id, "Hello dear user");
      }

      var bye = "bye";
      if (msg.text.toString().toLowerCase().includes(bye)) {
          bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
      }    

      var robot = "I'm robot";
      if (msg.text.indexOf(robot) === 0) {
          bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
      }
      var Hi = "hi";
      if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
      bot.sendMessage(msg.from.id, "Hello  " + msg.from.first_name);
      }
    });
  
    bot.on('message', (msg) => {
      var Hi = "hi";
        if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
          bot.sendMessage(msg.chat.id,"<b>bold</b> \n <i>italic</i> \n <em>italic with em</em> \n <a href=\"http://www.example.com/\">inline URL</a> \n <code>inline fixed-width code</code> \n <pre>pre-formatted fixed-width code block</pre>" ,{parse_mode : "HTML"});
          }
    });
    
    bot.on('message', (msg) => {
      var location = "location";
      if (msg.text.indexOf(location) === 0) {
        bot.sendLocation(msg.chat.id,44.97108, -104.27719);
        bot.sendMessage(msg.chat.id, "Here is the point");
      }
    
    });

    bot.on('message', (msg) => {
    
      var what = "idiot";
      if (msg.text.includes(what)) {
      bot.kickChatMember(msg.chat.id,  msg.from.id);
      }    
    });

    bot.on('message', (msg) => {
    var what = "idiot";
    if (msg.text.includes(what)) {
    bot.kickChatMember(msg.chat.id,  msg.from.id);
    }    
  });
});
});