exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 300000, customName: "search" });
    if (beg.onCooldown) return message.reply(` ${beg.time.minutes} minutes & ${beg.time.seconds} Sonra Yeniden Dene.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** Yakalandın! Para alamadın evlat.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** biraz karlıydı,  **${beg.amount}** tl💸. buldun. Toplam Paran **${beg.after}** 💸.`);
};

exports.help = {
    name: "ara",
    aliases: [],
    usage: "ara"
}
