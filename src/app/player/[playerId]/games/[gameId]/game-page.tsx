'use client'
import { useParams, useRouter } from "next/navigation"

import { useByPkGame } from "../hooks"
import { StartTime } from "./components"
import { PlayerOfGame } from "./components/PlayerOfGame"
import { useParticipants } from "./hooks"
import { InfoGame } from "./components/card"
import { IoMdPersonAdd } from "react-icons/io";
import { Button } from "@/components/ui"

export const GameIdPage = () => {
  const params = useParams()
  const router = useRouter()
  const game = useByPkGame(+params.gameId)
  console.log(params.playerId);
  
  const cantParticipants = useParticipants(+params.gameId).data?.data;
  return !game.isFetching && (
    <div className="bg-opacity-40 bg-white rounded-sm lg:w-2/3 xl:w-4/5 px-5 py-10 lg:py-5 w-full mx-5">
      <div className="flex flex-row items-end" >
        <h2
          className="text-custom-blue-900 text-2xl font-bold"
        >
          {game.data?.data.name}
        </h2>
        <p
          className={`${game.data?.data.estado ? "text-red-700" : "text-green-700"}  text-base font-medium ml-5`}
        >
          {game.data?.data.estado}
        </p>
      </div>
      <div  className=" lg:grid lg:grid-cols-2">
        <div >
          <StartTime
            maxOfPlayers={game.data?.data.number_of_players!}
            numberOfPlayers={cantParticipants?.length!}
            startTime={game.data?.data.start_date.toLocaleString()!.replace("T"," ").replace("Z"," ")!}
          />
          <div className="lg:w-full mt-5 flex items-center justify-center">
            <PlayerOfGame/>
          </div>
        </div>

        <div>
          <h3
            className="text-xl text-custom-blue-900 font-bold"
          >
            Datos sobre el juego
          </h3>
          <InfoGame
            name="Descripcion"
            value={game.data?.data.description!}
          />
          <InfoGame
            name="Cuota"
            value={game.data?.data.cuota!}
          />
          <InfoGame
            name="Moneda"
            value="Bolivianos"
          />
          <InfoGame
            name="Tiempo de oferta"
            value={`${game.data?.data.offer_time} Min`}
          />
          <InfoGame
            name="Periodos"
            value={game.data?.data.period.name!}
          />
          <InfoGame
            name="Creado"
            value={game.data?.data.period.createdAt.toString()!.replace("T"," ")!}
          />
          <Button
            onClick={()=>router.push(`/player/${params.playerId}/games/${params.gameId}/invited-friend`)}
            className="bg-custom-blue-900 hover:bg-custom-blue-500 block w-auto text-white p-2"
          >
            <IoMdPersonAdd size={25}/>
          </Button>
        </div>
      </div>
    </div>
  )
}
