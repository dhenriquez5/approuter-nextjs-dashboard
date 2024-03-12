import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action)
    if (action.type === 'PokemonSlice/toggleFavorite') {
      const { pokemons } = state.getState() as RootState
      localStorage.setItem('favorites', JSON.stringify(pokemons))
      return
    }
  }
}
