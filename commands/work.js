module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`Sen yorgunsun.  ${work.time.minutes} dakika  & ${work.time.seconds} saniye sonra geri gel .`);
    else return message.reply(`**${work.workedAs}** Olarak Calıstın ve**${work.amount}** TL💸. Kazandin . Toplam Paran**${work.after}** TL 💸.`);
};

module.exports.help = {
    name: "çalış",
    aliases: [],
    usage: "çalış"
}
