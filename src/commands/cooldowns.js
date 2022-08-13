const MessageEmbed = require("discord.js").MessageEmbed;
const { PrismaClient } = require("@prisma/client");
const { getWaitTime } = require("../utils/getWaitTime");
const prisma = new PrismaClient();

const execute = async (bot, msg, args) => {
  const player = await prisma.players.findUnique({
    where: {
      id: msg.author.id,
    },
  });

  if (!player) {
    return msg.channel.send("You need create a character first!");
  }

  const { wait, waitString } = getWaitTime(player.isHunt);

  const embed = new MessageEmbed()
    .setColor("#ff9900")
    .setAuthor(
      `${msg.author.username} - cooldowns`,
      `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`,
      "https://reisdev.github.io"
    )
    .addFields([
      {
        name: "🗡 **Experience**",
        value: `✅ --- \`farm\`\n${
          wait ? `⏰ ${waitString} --- \`hunt\`` : "✅ --- `hunt`"
        }`,
        inline: false,
      },
    ]);

  msg.channel.send({ embed });
};

module.exports = {
  name: "cooldowns",
  help: "Mostra o cooldowns do player",
  execute,
};
