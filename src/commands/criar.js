const { prisma } = require("../utils/prismaConnect");
const { isPlayerExist } = require("../hooks/isPlayerExist");
const { getRandomNumberBetween } = require("../utils/getRandomNumberBetween");

const execute = async (bot, msg, args) => {
  const isPlayer = await isPlayerExist(msg.author.id);
  const jogadorId = getRandomNumberBetween(1, 1);

  const jogador = await prisma.jogadores.findUnique({
    where: {
      id: jogadorId,
    },
  });

  const {
    nome,
    imagem,
    forca,
    habilidade,
    resistencia,
    armadura,
    poderdefogo,
    pontosdevida,
    pontosdemagia,
    pontosdeexperiencia,
    nivel,
    dinheiro,
    tipodedano,
    magiasconhecidas,
    items,
    vantagens,
    racas,
    desvantagens,
  } = jogador;

  if (!isPlayer) {
    const newPlayer = await prisma.players.create({
      data: {
        id: msg.author.id,
        nome,
        imagem,
        forca,
        habilidade,
        resistencia,
        armadura,
        poderdefogo,
        pontosdevida,
        pontosdemagia,
        pontosdeexperiencia,
        nivel,
        dinheiro,
        tipodedano,
        magiasconhecidas,
        items,
        vantagens,
        racas,
        desvantagens,
      },
    });

    return msg.channel.send(
      `O jogador **${msg.author.username}** foi criado com sucesso!`
    );
  }

  return msg.channel.send(
    `O jogador **${msg.author.username}** já existe.\n Use o comando \`${process.env.INITIAL}ficha\` para ver sua ficha de personagem`
  );
};

module.exports = { name: "criar", execute };
