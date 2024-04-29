'use client'
import { useParams } from "next/navigation"
import { CardPlayer } from "./card"
import { useParticipants } from "../hooks"

export const PlayerOfGame = () => {
  const params = useParams()
  const participants = useParticipants(+params.gameId)

  const admins = participants.data?.data.filter( p => p.owner);
  const players = participants.data?.data.filter( p => !p.owner);
  
  return (
    <>
      <div className="bg-white rounded-md p-2 lg:w-4/5 w-full overflow-y-scroll h-[400px]">
        <div>
          <h3
            className="text-custom-blue-900 font-semibold"
            >
            Administrador
          </h3>
          {
            admins && admins.map((admin, index) => (
              <CardPlayer 
              key={index}
              name={admin.player.name}
              />
            ))
          }
        </div>
        <div>
          <h3
            className="text-custom-blue-900 font-semibold"
            >
            Jugadores
          </h3>
          {
            players && players.map((player, index) => (
              <CardPlayer 
              key={index}
              name={player.player.name}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
