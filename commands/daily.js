module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`Zaten günlük kredinizi talep ettiniz. ${addMoney.time.hours} saat, ${addMoney.time.minutes} dakika & ${addMoney.time.seconds} saniye sonra yeniden gel.`);
    else return message.reply(`Günlükden **${addMoney.amount}** TL 💸. Kazandin . Toplam Paran **${addMoney.after}** TL 💸.`);
};

module.exports.help = {
    name: "günlük",
    aliases: [],
    usage: "günlük"
}
