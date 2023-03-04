const MessageEmbed = require("discord.js").MessageEmbed;
const MessageCollector = require("discord.js").MessageCollector;

const execute = (bot, msg, args) => {
  const embed = new MessageEmbed()
    .setColor("#ff9900")
    .setThumbnail(
      msg.author.avatar
        ? `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`
        : `https://cdn.discordapp.com/embed/avatars/${
            msg.author.discriminator % 5
          }.png`
    )
    .setTitle("Normie player")
    .setAuthor(
      `${msg.author.username} - profile`,
      `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`,
      "https://reisdev.github.io"
    )
    .addFields([
      {
        name: "**PROGRESS**",
        value: `**Level**: 1 (18.4%) \n **XP**: 23/125`,
        inline: false,
      },
      {
        name: "Este é um teste",
        value: "teste",
        inline: true,
      },
      {
        name: "Este é um teste",
        value: "teste",
        inline: true,
      },
    ]);
  msg.channel.send({ embed });
  const collector = new MessageCollector(
    msg.channel,
    (m) => m.author.id === msg.author.id,
    { time: 360000 }
  );

  collector.on("collect", (msg) => {
    if (collector.collected.first().content === "a") {
      collector.stop();
      msg.channel.send(`${msg.author} escolheu a`);
    }
  });

  collector.on("end", (collected) => {
    if (collected.size === 0) msg.channel.send(`Seu tempo na Dungeon acabou!`);
  });
};

module.exports = {
  name: "profile",
  help: "Retorna uma MessageEmbed",
  execute,
};
