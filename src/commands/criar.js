const { getRandomNumberBetween } = require("../utils/getRandomNumberBetween");
const { prisma } = require("../utils/prismaConnect");

const execute = async (bot, msg, args) => {
  const player = await prisma.player.findUnique({
    where: {
      nickname: msg.author.username,
    },
  });

  msg.channel.send(
    `🔍 Buscando se existe um jogador com nick: ${msg.author.username}...`
  );

  if (player) {
    return msg.channel.send(`🕹️ O jogador ${msg.author.username} já existe.`);
  }

  msg.channel.send("🐲 Selecionando seu pokemon...");

  const start_pokemon = [1, 4, 7];
  const pokemonId = start_pokemon[getRandomNumberBetween(0, 2)];

  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  ).then((response) => response.json());

  msg.channel.send("📱 Criando seu perfil...");

  await prisma.player.create({
    data: {
      nickname: msg.author.username,
      masterPokemon: pokemon,
      catchedPokemon: [],
      viewedPokemon: [],
    },
  });

  return msg.channel.send(
    `O jogador ${msg.author.username} recebeu o pokemon ${pokemon.name}.`
  );
};

module.exports = { name: "criar", execute };
