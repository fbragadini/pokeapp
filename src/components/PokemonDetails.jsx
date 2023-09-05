import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBgColor } from '../utilities/getBgColor'
import { Header } from './Header'
import { StatBar } from './StatBar'

export function PokemonDetails() {
  const [pokemonData, setPokemonData] = useState({})
  const params = useParams()
  const { id } = params
  const API_URL_PREFIX = 'https://pokeapi.co/api/v2/pokemon/'

  async function getPokemonData() {
    try {
      const res = await fetch(API_URL_PREFIX + id)
      const data = await res.json()
      let stats = []
      for (let i = 0; i < data.stats.length; i++) {
        stats.push({
          basestat: data.stats[i].base_stat,
          stat: data.stats[i].stat.name,
        })
      }
      let types = data.types.map((type) => type.type.name)
      const pokemon = {
        name: data.name,
        img: data.sprites.other['official-artwork'].front_default,
        height: data.height,
        weight: data.weight,
        stats: stats,
        types: types,
      }
      setPokemonData(pokemon)
      return
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemonData()
  }, [id])

  return (
    <>
      <Header />
      <article className="details-container">
        <h3 className="cap"> {pokemonData.name}</h3>

        <div className="type-container">
          {pokemonData.types &&
            pokemonData.types.map((type) => {
              return (
                <p
                  className="cap type"
                  style={{ backgroundColor: getBgColor(type) }}
                >
                  {type}
                </p>
              )
            })}
        </div>

        <img
          src={pokemonData.img}
          width="350"
          alt="Image of the pokemon fetched from API."
        />

        <div className="bodystat-container">
          <p>
            <span className="bold">Height:</span> {pokemonData.height}′
          </p>
          <p>
            <span className="bold">Weight:</span> {pokemonData.weight} lb
          </p>
        </div>

        {pokemonData.stats &&
          pokemonData.stats.map((stat) => {
            return (
              <div className="stat-container">
                <p className="cap statname">{stat.stat}</p>
                <StatBar
                  key={Math.random()}
                  bgcolor={getBgColor(pokemonData.types[0])}
                  basestat={stat.basestat}
                />
              </div>
              // <p className="cap">{stat.stat}: {stat.basestat}</p>
            )
          })}
      </article>
    </>
  )
}
