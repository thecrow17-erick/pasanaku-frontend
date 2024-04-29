'use client'
import {SubmitHandler, useForm} from 'react-hook-form';
import { IoMdPersonAdd } from "react-icons/io";
import { Button, Input } from '@/components/ui'

import { IFormInvitationYup } from '../../[playerId]/games/[gameId]/invited-friend/interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationFormInvitation } from '../../[playerId]/games/[gameId]/invited-friend/validators';
import { useUserStore } from '@/store';
import { useCreateInvitation } from '../../[playerId]/games/[gameId]/invited-friend/hooks';
import { useParams } from 'next/navigation';
import Link from 'next/link';



export const FormInvitedFriend = () => {
  const params =useParams()  
  const gameId = +params.gameId
  const userId = useUserStore(state => state.id);
  const userEmail = useUserStore(state => state.email);
  const createInvitation = useCreateInvitation(gameId)

  const {
    register,
    handleSubmit,
    formState:{
      errors
    },
    setValue
  } = useForm<IFormInvitationYup>({
    resolver: yupResolver(validationFormInvitation),
  })
  const onSubmit: SubmitHandler<IFormInvitationYup> = (bodyInvitation)=>{
    createInvitation.mutate(({body:{
      guest: bodyInvitation.guest,
      phone: `591${bodyInvitation.phone}`,
      owner: userEmail,
      player_id: userId
    }}),{
      onSuccess(data, variables, context) {
        console.log(data);
        setValue("guest","")
        setValue("phone","")
      },
      onError(error, variables, context) {
        console.log(error);
      },
    })
    
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="lg:py-5 px-10">
      <h2 className="text-custom-blue-900 font-bold mb-5 text-xl">Invitar amigos</h2>
      {
        errors.phone && (
          <p className='text-sm text-red-600 font-medium'>{errors.phone.message}</p>
        )
      }
      <label className="text-custom-blue-900 font-light text-lg">Numero de telefono</label>
      <Input
        {...register("phone")}
        className="mb-5"
        type='text'
        placeholder="ej: 59176679596"
      />
      {
        errors.guest && (
          <p className='text-sm text-red-600 font-medium'>{errors.guest.message}</p>
        )
      }
      <label className="text-custom-blue-900 mt-5 font-light text-lg">Correo electronico</label>
      <Input
        {...register("guest")}
        className="mb-5"
        type='email'
        placeholder="ej:correo@correo.com"
      />
      <div>
        <Button
          className="bg-custom-blue-900 hover:bg-custom-blue-700 md:w-auto w-full"
          type="submit"
          disabled={createInvitation.isPending}
        > 
          <IoMdPersonAdd
            size={20}
            className="mr-2"
          />
          Invitar
        </Button>
        <Link
          className='text-sm underline ml-2 text-custom-blue-900'
          href={`/player/${userId}/games/${gameId}`}
        >
          Volver al juego.
        </Link>
      </div>
    </form>  
  )
}
