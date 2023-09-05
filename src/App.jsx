import { Header } from './components/Header'
import PokemonList from './components/PokemonList'
import { useFetch } from './hooks/useFetch'

export function App() {
  const { loading, pokemonData } = useFetch()

  return (
    <>
      <Header />
      <main>
        {loading ? (
          <p className="not-found">Loading Data</p>
        ) : (
          <PokemonList pokemons={pokemonData} />
        )}
      </main>
    </>
  )
}
