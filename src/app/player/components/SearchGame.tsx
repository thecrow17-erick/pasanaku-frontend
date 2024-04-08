'use client'
import { Button, Input } from "@/components/ui"
import { useSearchStore } from "@/store";
import { useRouter } from 'next/navigation'
import { ChangeEvent } from "react";
import { MdAddToPhotos } from "react-icons/md";

export const SearchGame = () => {
  const searchGame = useSearchStore( state=> state.gameSearch)
  const setSearchGame = useSearchStore( state=> state.setSearchGame)
  const router = useRouter()

  const onChangeSearchGame = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchGame(e.target.value)
  }

  return (
    <div className="bg-custom-blue-300 w-full flex items-center">
      <div className="w-2/3 p-2 lg:px-20">
        <h3 className="text-white uppercase mb-5 font-semibold text-xl">
          Partidas disponibles
        </h3>
        <div className="flex items-center flex-row">
          <Input className="lg:w-1/3 w-full border-b-black bg-transparent border-x-0 rounded-none border-t-0" 
          type="search"
          value={searchGame}
          onChange={onChangeSearchGame}
          placeholder="Buscar nombre de la partida"
          />
          <Button className="bg-transparent hover:bg-inherit"
            onClick={()=>router.push("/player/1231/create-game")}
          >
            <MdAddToPhotos
              size={30}
              color="white"
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
