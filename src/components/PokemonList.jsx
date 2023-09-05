import { useState } from 'react'
import { searchPokemon } from '../utilities/searchPokemon'
import { PokemonDisplay } from './PokemonDisplay'

const PokemonList = ({ pokemons }) => {
  const [filterPokemons, setFilterPokemons] = useState(pokemons)

  return (
    <>
      <section className="searchBar">
        <form className="form">
          <input
            placeholder="Charmander, Bulbasaur, Squirtle..."
            type="text"
            onChange={(e) =>
              setFilterPokemons(searchPokemon(e.target.value, pokemons))
            }
          />
        </form>
      </section>

      <section className="card-container">
        {filterPokemons.length > 0 ? (
          filterPokemons.map((pokemon) => (
            <PokemonDisplay
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              img={pokemon.img}
              types={pokemon.types}
            />
          ))
        ) : (
          <p className="not-found">No pokemon found.</p>
        )}
      </section>
    </>
  )
}

export default PokemonList
