'use client'
import { Button, Input } from "@/components/ui"
import {SubmitHandler, useForm} from 'react-hook-form';
import { IBodyStartTime } from "../../interface";
import { useParams } from "next/navigation";
import { useUpdateStartTime } from "../../hooks/useUpdateStartTime";


interface props {
  setOpen:  (b: boolean)=>void;
}

export const UpdatedStartTime = ({setOpen}: props) => {
  const {
    register,
    handleSubmit
  } = useForm<IBodyStartTime>();
  const {gameId} =  useParams()
  const updateStartTime = useUpdateStartTime(+gameId)

  const onSubmit: SubmitHandler<IBodyStartTime> = (body)=>{
    updateStartTime.mutate({body},{
      onSuccess(data, variables, context) {
          console.log(data);
          setOpen(false)
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2
        className="text-custom-blue-900 text-sm font-medium mb-2"
      >
        Actualizar la fecha de inicio
      </h2>
      <Input
        {...register("start_date",{
          required: true,
        })}
        type="datetime-local"
      />
      
      <Button
        className="bg-custom-blue-900 hover:bg-custom-blue-500 text-white mt-5"
      >
        Actualizar
      </Button>
    </form>
  )
}
