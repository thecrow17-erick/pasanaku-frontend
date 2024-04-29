'use client'

import { FC } from 'react';
import { IoEye } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { Button } from '@/components/ui';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store';

interface props{
  id:               number;
  title:            string;
  timePayment:      number;
  payment:          number;
  starDate:         Date;
  cantMaxPlayers:   number; 
  status:           string; 
}

export const GameCard:FC<props> = ({id, title,starDate,payment,timePayment,cantMaxPlayers,status}) =>{
  const userId = useUserStore(state => state.id);
  const router  =  useRouter();
  const onclickGetGame= ()=>{
    console.log(id);
    router.push(`/player/${userId}/games/${id}`)
  }
  const onclickGetGameInvitated= ()=>{
    router.push(`/player/${userId}/games/${id}/invited-friend`)
  }

  const startTime = starDate.toString().replace('T'," ").replace("Z"," ").substring(0,starDate.toString().length - 5)

  return (
    <div className="w-full bg-custom-blue-700 p-5 rounded-lg">
      <div className='flex flex-col grid-cols-1'>
        <h3 className='text-white m-2 font-medium text-base'>juego - {title}</h3>
        <p className='text-white m-2 font-medium text-base'>Pago - {timePayment} dias</p>
        <p className='text-white m-2 font-medium text-base'>Cuota - {payment} bs</p>
        <p className='text-white m-2 font-medium text-base'>Estado - {status}</p>
        <p className='text-white m-2 font-medium text-base'>Jugadores maximos - {cantMaxPlayers}</p>
        <p className='text-white m-2 font-medium text-base'>Fecha de inicio - {startTime}</p>
      </div>
      <div className='flex justify-end'>
        <Button 
        onClick={()=>onclickGetGame()}
        className='bg-inherit text-white hover:bg-inherit hover:text-gray-600 p-0'>
          <IoEye size={25} className='mx-2 cursor-pointer'/>
        </Button>
        <Button 
        onClick={()=>onclickGetGameInvitated()}
        className='bg-inherit text-white hover:bg-inherit hover:text-gray-600 p-0'>
          <IoMdPersonAdd size={25} className='cursor-pointer'/> 
        </Button>
      </div>
    </div>
  )
}
