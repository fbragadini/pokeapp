export function searchPokemon(search, pokemonData) {
  const regex = new RegExp(search, 'gi')
  const searchResult = pokemonData.filter((pokemon) =>
    pokemon.name.match(regex)
  )
  return searchResult
}
