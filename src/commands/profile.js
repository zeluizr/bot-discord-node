const { PrismaClient } = require("@prisma/client");
const MessageEmbed = require("discord.js").MessageEmbed;
const prisma = new PrismaClient();

const level = [125, 250, 375, 500, 625, 750, 875, 1000];

const execute = async (bot, msg, args) => {
  const { id, username, discriminator } = msg.author;

  const calcPercent = (xp, level) => {
    const percent = (xp / level) * 100;
    return percent;
  };

  const player = await prisma.players.findUnique({
    where: {
      id,
    },
  });

  const embed = new MessageEmbed()
    .setColor("#ff9900")
    .setThumbnail(
      msg.author.avatar
        ? `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`
        : `https://cdn.discordapp.com/embed/avatars/${
            msg.author.discriminator % 5
          }.png`
    )
    .setAuthor(
      `${msg.author.username} - profile`,
      `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`,
      "https://reisdev.github.io"
    )
    .addFields([
      {
        name: "**PROGRESS**",
        value: `**Level**: ${player.level} (${calcPercent(
          player.exp,
          level[player.level - 1]
        )}%)\n**XP**: ${player.exp}/${level[player.level - 1]}\n**Area**: ${
          player.area
        } (Max: 1)`,
        inline: false,
      },
    ]);
  msg.channel.send({ embed });
};

module.exports = {
  name: "profile",
  help: "Retorna uma MessageEmbed",
  execute,
};
