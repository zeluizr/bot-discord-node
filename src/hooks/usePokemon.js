const usePokemon = (pokemonId) => {
  let pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  pokemon = pokemon.then((res) => res.json());

  return pokemon;
};

module.exports = { usePokemon };
