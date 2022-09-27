const Telegraf = require("telegraf").Telegraf,
      TOKEN = "5767772684:AAFIrs0zyy4klNzIEsu2kC40BA7nOkxIV_4";

const Bot = new Telegraf(TOKEN);

Bot.start(ctx => {
  ctx.replyWithSticker("https://www.gstatic.com/webp/gallery/1.webp");
});

Bot.hears(/[A-Z]+/, ctx => {
  fetch("http://localhost:3000/get-product-by/" + ctx.message.text)
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
      ctx.reply(element.name + " " + element.price + "\n" + element.image);
    });
  });
});

Bot.launch();

