import { create ,StateCreator} from "zustand"
import { createJSONStorage, devtools , persist, StateStorage} from "zustand/middleware"
interface GameState {
  gameSearch: string
}

interface Actions{
  setSearchGame: (value: string)=>void
  clearSearchGame: ()=>void
}

const storeApi :StateCreator<GameState & Actions> = (set)=>({
  gameSearch: '',
  setSearchGame: (value: string) => set(state => ({gameSearch: value})),
  clearSearchGame:()=> set(() => ({gameSearch: ''}))
})

export const usePersonStore = create<GameState & Actions>()(
  devtools(
    persist(
      storeApi
      , {
        name: 'game-search-storage',
      }
    )
  )
)
