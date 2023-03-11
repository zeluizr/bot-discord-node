const usePokemon = (pokemonId) => {
  const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    (response) => response.json()
  );

  return pokemon;
};

module.exports = { usePokemon };
