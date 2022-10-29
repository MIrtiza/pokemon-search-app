export async function getPokemonList() {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`
  ).then((res) => res.json());
  return data.results;
}

export async function getPokemonDescription(idx) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${idx}`
  ).then((res) => res.json());

  return pokemon.flavor_text_entries[0];
}

export async function getPokemonNames(idx) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${idx}`
  ).then((res) => res.json());

  return pokemon.name;
}

export function getPokemonSpirteUrl(pokemonIndex) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
}
