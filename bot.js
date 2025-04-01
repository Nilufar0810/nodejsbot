import { Bot } from "grammy";
import token from "./constants/token.js";

const bot = new Bot(token);

bot.command("start", (ctx) => {
  ctx.reply("Na gap juraaaa");
});

bot.on("message:text", async (ctx) => {
  const wordsArray = [
    "salom",
    "assalomu alaykum",
    "qalesiz",
    "na gap",
    "gap yoq",
  ];
  const userMessage = ctx.message.text.toLowerCase(); // Foydalanuvchi yozgan matnni kichik harflarga o'tkazamiz

  // Agar foydalanuvchi yozgan matn massivda bo'lsa
  if (wordsArray.includes(userMessage)) {
    await ctx.reply(`Siz yozgan matn "${userMessage}" massivda mavjud! ✅`);
  } else {
    await ctx.reply("Siz yozgan matn massivda mavjud emas. ❌");
  }
});
bot.start();
