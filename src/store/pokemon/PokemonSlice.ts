import { SimplePokemon } from '@/pokemons/interfaces/PokemonI'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PokemonState {
  favorites: {
    [key: string]: SimplePokemon
  }
}

// const getInitialState = () => {
//   // if (typeof localStorage === 'undefined') return {}
//   const favorites = JSON.parse(localStorage.getItem('favorites') ?? '{}')
//   return favorites
// }

const initialState: PokemonState = {
  favorites: {},
}

const PokemonSlice = createSlice({
  name: 'PokemonSlice',
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload
      const { id } = pokemon
      if (state.favorites[id]) {
        delete state.favorites[id]
      } else {
        state.favorites[id] = pokemon
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
  },
})

export const { toggleFavorite, setFavoritePokemons } = PokemonSlice.actions

export default PokemonSlice.reducer
