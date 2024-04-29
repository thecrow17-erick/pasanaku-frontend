import { StartTime } from "./components"


export const GameIdPage = () => {
  return (
    <div className="bg-opacity-40 bg-white rounded-sm lg:w-3/4 xl:w-3/5 px-5 py-10 lg:py-5 w-full mx-5">
      <div className="flex flex-row items-end" >
        <h2
          className="text-custom-blue-900 text-xl font-bold"
        >
          Nombre de la partida
        </h2>
        <p
          className="text-red-700 text-sm font-medium ml-5"
        >
          En espera
        </p>
      </div>
      <div  className=" lg:grid lg:grid-cols-2">
        <div >
          <StartTime
            maxOfPlayers={10}
            numberOfPlayers={9}
            startTime={'10/12/2024, 10:12:04'}
          />
          <div className="lg:w-3/4 bg-white justify-items-center flex mt-5 h-[400px]">
            sas
          </div>
        </div>

        <div>
          dasd
        </div>
      </div>
    </div>
  )
}
