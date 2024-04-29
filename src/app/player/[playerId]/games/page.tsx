import { GameCard, SearchGame } from "../../components";
import { AllGames } from "./all-games";

export default function gamesPage(){
  return(
    <>
      <SearchGame/>
      
      <AllGames/>
    </>
  )
}