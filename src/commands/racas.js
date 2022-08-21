const { prisma } = require("../utils/prismaConnect");
const { MessageEmbed } = require("discord.js");
const { getWaitTime } = require("../utils/getWaitTime");
const {
  isPlayerExist,
  isPlayerExistMessage,
} = require("../hooks/isPlayerExist");

const execute = async (bot, msg, args) => {
  const isPlayer = await isPlayerExist(msg.author.id);
  if (!isPlayer) return msg.channel.send(isPlayerExistMessage);
  const [raca] = args;

  if (raca === undefined)
    return msg.channel.send(
      "Você precisa escolher uma raça!\n Exemplo: `mz racas humano`"
    );

  const RACA = await prisma.vantagensUnicas.findUnique({
    where: { nome: raca },
  });

  const embed = new MessageEmbed().setColor("#ff9900").addFields([
    {
      name: `${RACA?.nome}`,
      value: `${RACA?.descricao}`,
      inline: false,
    },
    ,
  ]);

  msg.channel.send({ embed });
};

module.exports = {
  name: "raca",
  execute,
};
