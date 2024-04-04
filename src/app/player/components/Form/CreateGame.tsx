'use client'

import { Button, Input, Textarea } from "@/components/ui"
import { CountdownTimer } from "../CountDownTimer"
import { ExtFile, FileInputButton, FileMosaic } from "@files-ui/react"
import { useState } from "react";
import { useRouter } from "next/navigation";

export const CreateGame = () => {
  const [fileValue,setFileValue] = useState<ExtFile | undefined>(undefined);

  const updateFiles = (incommingFiles:ExtFile[]) => {
    console.log("incomming extFiles", incommingFiles);
    setFileValue(incommingFiles[0]);
  };
  const removeFile = () => {
    setFileValue(undefined);
  };

  const router = useRouter();

  return (
    <form className="bg-white rounded-sm lg:w-3/4 xl:w-2/3 py-5 lg:py-0 w-full mx-5 bg-opacity-40 lg:grid lg:grid-cols-2">
        <div className="lg:py-5 px-10">
          <h2 className="text-custom-blue-900 font-bold mb-5 text-xl">Crear partida</h2>

          <label className="text-custom-blue-900 font-light text-lg">Titulo de la partida</label>
          <Input
            className="mb-5"
            placeholder="ej: Los mejores amigos"
          />

          <label className="text-custom-blue-900 font-light text-lg">Descripcion del juego</label>
          <Textarea
            className="mb-5"
          />

          <CountdownTimer />

          <label className="text-custom-blue-900 mt-5 font-light text-lg">Monto para la partida</label>
          <Input
            className="mb-5 w-2/4"
            placeholder="ej: 100.00"
          />

        </div>  

        <div className="lg:py-5 px-10">
          <label className="text-custom-blue-900 font-light text-lg">Cantidad de jugadores</label>
          <Input
            className="mb-5 w-1/3"
            placeholder="ej: 5"
          />
          <div className="flex flex-col">
            <label className="text-custom-blue-900 font-light text-lg">Foto del grupo</label>
            <>
              {fileValue ? (
                <FileMosaic 
                className="mb-5"
                {...fileValue} onDelete={removeFile} preview />
                ) : (
                  <FileInputButton 
                  className="w-1/3 mb-5"
                  value={fileValue ? [fileValue] : []} 
                  accept="image/*"
                  onChange={updateFiles} />
                  )}
              <FileMosaic />
            </>
            
            <Button
              type="submit"
              onClick={(e)=>{
                e.preventDefault();
                router.push('/player/42141/games/23314124/invited-friend')
              }}
              className="bg-custom-blue-900 hover:bg-custom-blue-700 w-2/4"
            >
              Crear Partida
            </Button>

          </div>
        </div>    
    </form>
  )
}
