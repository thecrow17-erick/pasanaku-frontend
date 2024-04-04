'use client'

import Image from 'next/image';
import { FC } from 'react';

interface props{
  title:            string;
  timePayment:      string;
  payment:          string;
  endDate:          string;
  cantPlayers:      number;
  cantMaxPlayers:   number; 
}

export const GameCard:FC<props> = ({title,endDate,payment,timePayment,cantMaxPlayers,cantPlayers}) =>{
  return (
    <div className="w-full bg-custom-blue-700 p-5 rounded-md">
      <div >
        <div className='flex flex-row items-center'>

          <div className='h-28 w-28 bg-white rounded-lg mr-5'/>
          
          <div>
            <h3 className='text-white font-semibold text-sm'>juego - {title}</h3>
          </div>
        </div>
        
        <div className='flex flex-col mt-10 grid-cols-1'>
          <p className='text-white m-2 font-medium text-base'>Pago - {timePayment} dias</p>
          <p className='text-white m-2 font-medium text-base'>Cuota - {payment} bs</p>
          <p className='text-white m-2 font-medium text-base'>jugadores - {cantPlayers}/{cantMaxPlayers}</p>
          <p className='text-white m-2 font-medium text-base'>Fecha de inicio - {endDate}</p>
        </div>
      </div>
    </div>
  )
}
