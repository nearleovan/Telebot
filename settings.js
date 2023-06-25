const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'h3ZIE7t6lAlHOHh', // 👉 login https://api.zeeoneofc.my.id to get apikey
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "6277186053:AAHb64pfU6R3GGLLclsk3r79-HCnaxNB798" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "Nee Bot" //your bot name
global.OWNER_NAME = "Near Leovan - Grz" //your name
global.OWNER_NUMBER = "6289515425001" //your telegram number
global.OWNER = ["https://t.me/nearleovan", "https://t.me/nearleovan"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "https://nearpedia.my.id/img/nee.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "https://nearpedia.my.id/dashboard/assets/img/SMM.png" // foto donasi di folder image
global.lang = language //don't change
