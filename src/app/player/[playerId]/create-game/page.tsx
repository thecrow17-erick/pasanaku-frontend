import { CreateGame } from "../../components";

export default function create(){
  return (
    <div className="bg-custom-blue-300 w-full lg:h-screen h-full">
      <div className="w-full py-10 flex justify-center">
        <CreateGame/>
      </div>
    </div>
  )
}