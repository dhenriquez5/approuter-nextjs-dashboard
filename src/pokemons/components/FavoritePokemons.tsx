'use client'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store/store'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {
  const pokemons = useAppSelector((state) => state.pokemons.favorites)
  const favoritesPokemons = Object.values(pokemons)

  return (
    <>
      {favoritesPokemons.length === 0 && <NoFavorites />}
      {favoritesPokemons.length > 0 && (
        <PokemonGrid pokemons={favoritesPokemons} />
      )}
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline className="text-red-500" />
      <span>No hay Favorites</span>
    </div>
  )
}
