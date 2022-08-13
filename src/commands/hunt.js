const { PrismaClient } = require("@prisma/client");
const { getRandomNumberBetween } = require("../utils/getRandomNumberBetween");
const { getWaitTime } = require("../utils/getWaitTime");
const prisma = new PrismaClient();

const BASE_LEVEL = [125, 250, 375, 500, 625, 750, 875, 1000];

const execute = async (bot, msg, args) => {
  const player = await prisma.players.findUnique({
    where: {
      id: msg.author.id,
    },
  });

  if (!player) {
    return msg.channel.send("You need create a character first!");
  }

  const monsterID = getRandomNumberBetween(1, 3);

  const { wait, waitString } = getWaitTime(player.isHunt);

  if (wait) {
    return msg.channel.send(`You need wait ⏰ ${waitString} to hunt again!`);
  }

  const monster = await prisma.monsters.findUnique({
    where: {
      id: `${monsterID}`,
    },
  });

  if (player.attack > monster.defense) {
    await prisma.players.update({
      where: { id: msg.author.id },
      data: {
        isHunt: new Date(),
        exp: player.exp + monster.exp,
        coins: player.coins + monster.coins,
        level:
          BASE_LEVEL[player.level - 1] > player.exp
            ? player.level
            : player.level + 1,
      },
    });
    msg.channel.send(
      `**${msg.author.username}** found and kill a ${monster.icon} **${monster.name}**\nEarned ${monster.coins} coins and ${monster.exp} XP`
    );
  } else {
    await prisma.players.update({
      where: { id: msg.author.id },
      data: { isHunt: new Date() },
    });
    msg.channel.send(
      `**${msg.author.username}** found a ${monster.icon} **${monster.name}**, but lost fighting`
    );
  }
};

module.exports = {
  name: "hunt",
  help: "Hunt",
  execute,
};
