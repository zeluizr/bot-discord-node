const { PrismaClient } = require("@prisma/client");
const MessageEmbed = require("discord.js").MessageEmbed;
const prisma = new PrismaClient();
const {
  isPlayerExist,
  isPlayerExistMessage,
} = require("../hooks/isPlayerExist");

const execute = async (bot, msg, args) => {
  const { id, username, discriminator } = msg.author;
  const isPlayer = await isPlayerExist(msg.author.id);

  if (!isPlayer) return msg.channel.send(isPlayerExistMessage);

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
    .setThumbnail(player.imagem)
    .setAuthor(
      `@${msg.author.username}`,
      `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`,
      "https://reisdev.github.io"
    )
    .addFields([
      {
        name: "**Ficha de Personagem**",
        value: `
        **Nome:** ${player.nome}

        **F**orça: ${player.forca}
        **H**abilidade: ${player.habilidade}
        **R**sistência: ${player.resistencia}
        **A**rmadura: ${player.armadura}
        **P**oder **D**e **F**ogo: ${player.poderdefogo}
        ============================
        **P**ontos de **V**ida: ${player.pontosdevida}
        **P**ontos de **M**agia: ${player.pontosdemagia}
        **P**ontos de **E**xperiência: ${player.pontosdeexperiencia}
        ============================
        **Dinheiro**: ${player.dinheiro}
        `,
        inline: false,
      },
    ]);
  msg.channel.send({ embed });
};

module.exports = {
  name: "ficha",
  execute,
};
