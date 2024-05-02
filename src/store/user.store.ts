import { create ,StateCreator} from "zustand"
import { devtools , persist} from "zustand/middleware"
interface UserState {
  name:       string;
  id:         string;
  email:      string;
  path_image: string;
}
interface authState {
  logged:     boolean;  
}

interface Actions{
  setUser: (value: UserState)=>void
  clearUser: ()=>void
}

const storeApi :StateCreator<UserState & authState & Actions> = (set)=>({
  name: '',
  logged: false,
  id: '',
  path_image: '',
  email: "",
  setUser: (value: UserState) => set(state => ({...value,logged: true})),
  clearUser:()=> set(() => ({id: '', path_image:'',logged:false,name:''}))
})

export const useUserStore = create<UserState & authState & Actions>()(
  devtools(
    persist(
      storeApi
      , {
        name: 'user-storage',
      }
    )
  )
)
