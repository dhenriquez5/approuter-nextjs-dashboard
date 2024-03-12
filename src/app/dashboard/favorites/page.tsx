import { FavoritePokemons } from '@/pokemons/components/FavoritePokemons'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Favoritos ',
  description: 'Listado de pokemons Favoritos',
}

export default async function FavoritosPage() {
  return (
    <div className="flex flex-col p-2">
      <span className="text-3xl my-2">
        Pokemons Favorito <small className="text-blue-500">Global State</small>
      </span>
      <FavoritePokemons />
    </div>
  )
}
