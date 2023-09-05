import { useEffect, useState } from 'react'

export function useFetch() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const pokemonDataPromises = fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    )
      .then((res) => res.json())
      .then((data) => {
        const results = data.results
        const urlArray = results.map((result) => {
          return result.url
        })
        return urlArray
      })
      .then((urlArray) => {
        const pokemonDataPromises = urlArray.map((url) => {
          return fetch(url)
            .then((res) => res.json())
            .then((data) => {
              const alltypes = data.types
              const mappedTypes = alltypes.map((map) => {
                return (map = map.type.name)
              })
              const newPokemon = {
                name: data.name,
                id: data.id,
                img: data.sprites.other['official-artwork'].front_default,
                types: mappedTypes,
              }
              return newPokemon
            })
        })
        return pokemonDataPromises
      })
    pokemonDataPromises.then((pokemonData) => {
      Promise.all(pokemonData).then((data) => {
        setPokemonData(data)
        setLoading(false)
      })
    })
  }, [])

  return { loading, pokemonData, setPokemonData }
}
