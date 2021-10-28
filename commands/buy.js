const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("Görünüşe göre fakirsin.");
  let item = args[0];
  if (!item) return message.channel.send("Ne almaya çalışıyorsun?");
  let hasItem = client.shop[item.toLowerCase()];
  if (!hasItem || hasItem == undefined) return message.reply("Kelimeyi Doğru Yazmanizi Öneriyorum");
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply("Bakiyeniz yetersiz. Bunu satin almak icin :dollar: "+hasItem.cost+" tl-ye ihtiyaciniz var .");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(` ${item} satın aldınız  ${hasItem.cost} TL :dollar: tutdu.`);
};

exports.help = {
  name: "al",
  aliases: [],
  usage: `al <isim>`
};
