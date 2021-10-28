exports.execute = async (client, message, args) => {
    let users = [
        "Şahan",
        "Şahan",
        "Şahan",
        "Şahan"
    ];
    let amount = Math.floor(Math.random() * 50) + 10;
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(` ${beg.time.seconds} saniye beklemen lazim.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** Daha sonra tekrar deneyin.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** sana **${beg.amount}** tl 💸. bağış yaptı. Hesabinda Olan Para Miktari **${beg.after}** tl 💸 .`);
};

exports.help = {
    name: "dilen",
    aliases: [],
    usage: "dilen"
}
