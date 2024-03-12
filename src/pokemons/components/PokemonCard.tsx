'use client'
import Link from 'next/link'
import { SimplePokemon } from '../interfaces/PokemonI'
import Image from 'next/image'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { toggleFavorite } from '@/store/pokemon/PokemonSlice'
interface Props {
  pokemon: SimplePokemon
}
export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon
  const pokemons = useAppSelector((state) => state.pokemons.favorites)
  const dispatch = useAppDispatch()
  const isFavorite = pokemons[id]

  const onToggleFavorite = () => {
    dispatch(toggleFavorite(pokemon))
  }
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={`Pokemon ${pokemon.name}`}
            width={100}
            height={100}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              prefetch={true}
              href={`pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Mas Informacion
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
            onClick={onToggleFavorite}
          >
            <div className="text-green-600">
              {isFavorite && <IoHeart className="text-red-600" />}
              {!isFavorite && <IoHeartOutline className="text-red-600" />}
            </div>
            <div className="pl-3">
              {isFavorite && (
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Es favorito
                </p>
              )}
              {!isFavorite && (
                <p className="text-sm font-medium text-gray-800 leading-none">
                  No es favorito
                </p>
              )}

              <p className="text-xs text-gray-500">Click para cambiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
