const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`Bakiye`)
        .addField(`Hesap`, `<@${userBalance.user}>`)
        .addField(`Toplam para Miktarı`, `${userBalance.amount} 💸`)
        .addField(`Durum`, userBalance.position)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "bakiye",
    aliases: ["money", "cüzdan", "balance"],
    usage: `bakiye`
}
