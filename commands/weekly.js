exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1000) + 500;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`Haftalık kredinizi zaten talep ettiniz  ${addMoney.time.days} gun , ${addMoney.time.hours} saat, ${addMoney.time.minutes} dakika & ${addMoney.time.seconds} saniye sonra geri gel .`);
    else return message.reply(`Haftalıkdan **${addMoney.amount}**  TL 💸. Kazandin . Toplam Paran  **${addMoney.after}** 💸. `);
};

exports.help = {
    name: "haftalık",
    aliases: [],
    usage: "haftalık"
}
