import { PokemonGrid } from '@/pokemons/components/PokemonGrid'
import { PokemonI, SimplePokemon } from '@/pokemons/interfaces/PokemonI'
import { Metadata } from 'next'

export const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const response: PokemonI = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json())

  const pokemons = response.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2) ?? '1',
    name: pokemon.name,
  }))

  // throw new Error('Unexpected Error')

  return pokemons
}

export const metadata: Metadata = {
  title: 'Listado Pokemons',
  description: 'Listado de pokemons',
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151)
  return (
    <div className="flex flex-col p-2">
      <span className="text-3xl my-2">
        Listado De Pokemons <small className="text-blue-500">estatico</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
