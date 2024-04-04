import { GameCard, SearchGame } from "../../components";

export default function gamesPage(){
  return(
    <>
      <SearchGame/>
      <div className="h-full w-full xl:h-screen p-5 lg:p-20 bg-custom-blue-300 grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8 md:grid-cols-2 xl:grid-cols-4">
        {
          Array.from({length:8}).map((_,i)=>(
            <GameCard
            cantMaxPlayers={10}
            cantPlayers={3}
            endDate="10/12/2024"
            payment="200"
            timePayment="5"
            title="El mejor grupo"
            key={i}          
            />
            ))
          }
      </div>
    </>
  )
}