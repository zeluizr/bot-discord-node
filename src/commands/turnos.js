const { prisma } = require("../utils/prismaConnect");
const { MessageEmbed } = require("discord.js");
const { getWaitTime } = require("../utils/getWaitTime");
const {
  isPlayerExist,
  isPlayerExistMessage,
} = require("../hooks/isPlayerExist");

const execute = async (bot, msg, args) => {
  if (!isPlayerExist) return msg.channel.send(isPlayerExistMessage);

  const embed = new MessageEmbed()
    .setColor("#ff9900")
    .setTitle(":dagger: TURNOS DE COMBATE :dagger:")
    .addFields([
      {
        name: "PASSO 1️⃣",
        value: `**Iniciativa:** cada combatente rola um dado e acrescenta ao resultado sua Habilidade. Se incluirá **+1 por Aceleração** ou +2 por Teleporte (não cumulativos), quando houver. Combatentes com iniciativa mais alta agem primeiro. Em caso de empate, combatentes com Habilidade mais alta agem primeiro. Se mesmo assim houver empate, os combatentes agem ao mesmo tempo. Este teste é feito apenas uma vez, no primeiro turno do combate: o valor de iniciativa é mantido até o final da luta.`,
        inline: false,
      },
      {
        name: "PASSO 2️⃣",
        value: `**Força de Ataque (FA):** os personagens escolhem seus alvos e fazem seus ataques ou manobras, cada um em sua iniciativa. A Força de Ataque de cada um será igual a H+F+1d (para ataques corpo-a-corpo) ou H+PdF+1d (para ataques à longa distância), à escolha do jogador. Essa escolha deve ser feita antes da rolagem.`,
        inline: false,
      },
      {
        name: "PASSO 3️⃣",
        value: `**Força de Defesa (FD):** a Força de Defesa da vítima será igual a H+A+1d. Subtraia esse valor da FA do atacante. O resultado final será a quantidade de Pontos de Vida perdidos pela vítima.`,
        inline: false,
      },
    ]);

  msg.channel.send({ embed });
};

module.exports = {
  name: "turnos",
  execute,
};
