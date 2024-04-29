'use client'

import {useForm,Controller, SubmitHandler} from 'react-hook-form';
import { ExtFile, FileInputButton, FileMosaic } from "@files-ui/react"
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { Button, Input, Textarea } from "@/components/ui"
import { CountdownTimer } from "../CountDownTimer"
import { dataPeriods, IFormGame } from "../../[playerId]/create-game/interface";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationFormGame } from '../../[playerId]/create-game/validators';
import { useCreateGame } from '../../[playerId]/create-game/hooks';
import { useUserStore } from '@/store';

interface props{
  periods: dataPeriods[]
}

export const CreateGame = ({periods}: props) => {
  const createGame = useCreateGame();
  const userId = useUserStore(state => state.id)
  const {
    register,
    handleSubmit,
    control,
    formState:{
      errors
    }
  } = useForm<IFormGame>({
    resolver: yupResolver(validationFormGame)
  })
  
  const [fileValue,setFileValue] = useState<ExtFile | undefined>(undefined);


  const updateFiles = (incommingFiles:ExtFile[]) => {
    console.log("incomming extFiles", incommingFiles);
    setFileValue(incommingFiles[0]);
  };
  const removeFile = () => {
    setFileValue(undefined);
  };

  const router = useRouter();

  const onSubmit: SubmitHandler<IFormGame> = (body)=>{
    createGame.mutate(({id: userId, body}),{
      onSettled(data, error, variables, context) {
        console.log(data);
        router.push(`/player/${userId}/games/${data?.data.id}/invited-friend`)
      },
      onError(error, variables, context) {
          console.log(error);
      },
    })

  }

  return (
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="bg-white rounded-sm lg:w-3/4 xl:w-2/3 py-5 lg:py-0 w-full mx-5 bg-opacity-40 lg:grid lg:grid-cols-2">
        <div className="lg:py-5 px-10">
          <h2 className="text-custom-blue-900 font-bold mb-5 text-xl">Crear partida</h2>

          {
            errors.name && (
              <p className='text-red-600 text-lg font-medium'>{errors.name.message}</p>
            )
          }
          <label className="text-custom-blue-900 font-light text-lg">Titulo de la partida</label>
          <Input
            className="mb-5"
            {...register("name")}
            placeholder="ej: Los mejores amigos"
          />

          {
            errors.description && (
              <p className='text-red-600 text-lg font-medium'>{errors.description.message}</p>
            )
          } 
          <label className="text-custom-blue-900 font-light text-lg">Descripcion del juego</label>
          <Textarea
            {...register("description")} 
            className="mb-5"
          />

          {
            errors.period_id && (
              <p className='text-red-600 text-lg font-medium'>{errors.period_id.message}</p>
            )
          }
          <Controller
          control={control}
          name='period_id'
          render={({field:{onChange,value}}) => (
            <CountdownTimer 
            periods={periods}
            onChange={e => onChange(e)}
            value={value}
            />
            )}
          />

          {
            errors.cuota && (
              <p className='text-red-600 text-lg font-medium'>{errors.cuota.message}</p>
            )
          }

          <label className="text-custom-blue-900 mt-5 font-light text-lg">Monto para la partida</label>
          <Input
            {...register("cuota")}
            className="mb-5 md:w-2/4 w-full"
            placeholder="ej: 100.00"
          />

        </div>  

        <div className="lg:py-5 px-10">
          {
            errors.number_of_players && (
              <p className='text-red-600 text-lg font-medium'>{errors.number_of_players.message}</p>
            )
          }
          <label className="text-custom-blue-900 font-light text-lg">Cantidad de jugadores</label>
          <Input
            {...register("number_of_players")}
            className="mb-5 md:w-1/3 w-full"
            placeholder="ej: 5"
          />
          {
            errors.start_date && (
              <p className='text-red-600 text-lg font-medium'>{errors.start_date.message}</p>
            )
          }
          <label className="text-custom-blue-900 font-light text-lg">Fecha de inicio</label>
          <Input
            {...register("start_date")}
            className="mb-5 md:w-auto w-full"
            placeholder="ej: 5"
            type="datetime-local"
          />
          {
            errors.offer_time && (
              <p className='text-red-600 text-lg font-medium'>{errors.offer_time.message}</p>
            )
          }
          <label className="text-custom-blue-900 font-light text-lg">Tiempo de oferta</label>
          <Input
            {...register("offer_time")}
            className="mb-5 md:w-1/3 w-full"
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
                  className="md:w-1/3 w-full mb-5"
                  value={fileValue ? [fileValue] : []} 
                  accept="image/*"
                  onChange={updateFiles} />
                  )}
              <FileMosaic />
            </>
            
            <Button
              type="submit"
              className="bg-custom-blue-900 hover:bg-custom-blue-700 md:w-2/4 w-full"
            >
              Crear Partida
            </Button>

          </div>
        </div>    
    </form>
  )
}
