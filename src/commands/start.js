const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const execute = async (bot, msg, args) => {
  const player = await prisma.players.findUnique({
    where: {
      id: msg.author.id,
    },
  });

  if (!player) {
    const newPlayer = await prisma.players.create({
      data: {
        id: msg.author.id,
        createdAt: new Date(),
      },
    });

    return msg.channel.send(
      `Player **${msg.author.username}** has been created`
    );
  }

  return msg.channel.send(
    `The player **${msg.author.username}** has already been created\n Use the command \`${process.env.PREFIX}profile\` to see your stats`
  );
};

module.exports = {
  name: "start",
  help: "Start",
  execute,
};
