const { prisma } = require("../utils/prismaConnect");

const isPlayerExist = async (id) => {
  return await prisma.players.findUnique({ where: { id } });
};

const isPlayerExistMessage = `Você precisa criar seu jogador! Para isso use o com ando \`${process.env.INITIAL}criar\``;

module.exports = { isPlayerExist, isPlayerExistMessage };
