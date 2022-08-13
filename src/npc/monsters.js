const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async function getMonster(id) {
  const monster = await prisma.monsters.findOne({
    where: {
      id,
    },
  });

  return monster;
};
