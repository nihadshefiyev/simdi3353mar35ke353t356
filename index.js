const Discord = require("discord.js");
 const client = new Discord.Client({ disableMentions: 'everyone' });
const Eco = require("quick.eco");

client.eco = new Eco.Manager(); // quick.eco
client.db = Eco.db; // quick.db
client.config = require("./botConfig");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.shop = {
  cola: {
    cost: 4000 
  },
  lahmacun: {
    cost: 25
  },
  kahve: {
    cost: 24.38
  },
  soda: {
    cost: 2
  },
adacayı: {
    cost: 3
  },
mercimekcorbası: {
    cost: 12
  },
patateskızartması: {
    cost: 8
  },
ciger: {
    cost: 16
  },
yapraksarma: {
    cost: 15
  },
biberdolması: {
    cost: 15
  },
sutlac: {
    cost: 9
  },
kunefe: {
    cost: 10
  },
patlıcan: {
    cost: 18
  },
kahve: {
    cost: 4
  },
fanta: {
    cost: 6
  },
kurufasulye: {
    cost: 7
  },
tavuk: {
    cost: 8
  },
kusbasi: {
    cost: 15
  },
bamya: {
    cost: 8
  },
nohut: {
    cost: 10
  },
sekerpare: {
    cost: 12
  },

cukolata: {
    cost: 8
  },
oralet: {
    cost: 5
  },
mumbar: {
    cost: 18
  },
adana: {
    cost: 14
  },
urfa: {
    cost: 13
  },
karnıyarık: {
    cost: 15
  },
cola: {
    cost: 4
  },
lahmacun: {
    cost: 18
  },
doner: {
    cost: 12
  },
pizza: {
    cost: 25
  },
tost: {
    cost: 8
  },
cay: {
    cost: 1.5
  },
su: {
    cost: 1
  },
gazoz: {
    cost: 6
  },
bira: {
    cost: 15
  },
viski: {
    cost: 23
  },
ayran: {
    cost: 4
  },
pide: {
    cost: 14
  },
salgam: {
    cost: 7
  },
salata: {
    cost: 6
  },
pilav: {
    cost: 8
  },
pankek: {
    cost: 13
  },
nargile: {
    cost: 1000
  },
kofte: {
    cost: 15
  },
};
const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});


client.login(process.env.token);





const db = require("quick.db")