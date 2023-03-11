const { usePokemon } = require("../hooks/usePokemon.js");
const {
  getRandomNumberBetween,
} = require("../utils/getRandomNumberBetween.js");

const MessageEmbed = require("discord.js").MessageEmbed;
const execute = async (bot, msg, args) => {
  const pokemonId = getRandomNumberBetween(1, 150);
  const pokemon = await usePokemon(pokemonId);

  const embed = new MessageEmbed()
    .setColor("#ff9900")
    .setThumbnail(pokemon.sprites.other["official-artwork"].front_default)
    .setAuthor(
      `@${msg.author.username}`,
      `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`
    )
    .addFields([
      {
        name: `**#${pokemon.id}** ${pokemon.name.toUpperCase()}`,
        value: `
        **P**ontos de Vida: ${pokemon.stats[0].base_stat}
        **A**taque: ${pokemon.stats[1].base_stat}
        **D**efesa: ${pokemon.stats[2].base_stat}
        `,
        inline: true,
      },
    ])
    .setFooter("============================");
  msg.channel.send({ embed });
};

module.exports = {
  name: "catch",
  execute,
};
