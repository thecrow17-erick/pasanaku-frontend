import { allPeriod } from "@/lib/query";
import { CreateGame } from "../../components";
import { dataPeriods } from "./interface";

export default async function create(){
  const periods =  await allPeriod();


  const dataPeriod: dataPeriods[] = periods.data.map(p=>({
    value: p.id,
    label: p.name
  }))

  return (
    <div className="bg-custom-blue-300 w-full xl:h-screen h-full">
      <div className="w-full py-10 flex justify-center">
        <CreateGame periods={dataPeriod}/>
      </div>
    </div>
  )
}