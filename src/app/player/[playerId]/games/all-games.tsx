'use client'
import { GameCard } from "../../components"
import { useAllGames } from "./hooks"

export const AllGames = () => {
  const games = useAllGames();
  return (
    <>
      <div className={`h-screen p-5 lg:p-20 bg-custom-blue-300 ${!games.data && "h-screen"} `}>
        <div className="grid grid-cols-1 w-auto h-auto lg:grid-cols-3 gap-4 xl:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {
            games.data && games.data.data.map((game,i)=>(
              <GameCard
              id={game.id}
              cantMaxPlayers={game.number_of_players}
              starDate={game.start_date}
              payment={game.cuota}
              status={game.estado}
              timePayment={game.offer_time}
              title={game.name}
              key={i}          
              />
              ))
            }
        </div>
      </div>
    </>
  )
}
