'use client'
import { ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { setFavoritePokemons } from './pokemon/PokemonSlice'

interface Props {
  children: ReactNode
}
export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') ?? '{}')
    store.dispatch(setFavoritePokemons(favorites))
  }, [])

  return <Provider store={store}>{children}</Provider>
}
