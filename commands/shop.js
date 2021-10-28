const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - :dollar: ${client.shop[items[i]].cost}\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("Dükkan")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("Satin Almak Icin b!al <isim> .")
  return message.channel.send(embed);
};

exports.help = {
  name: "dükkan",
  aliases: [],
  usage: `dükkan`
};
