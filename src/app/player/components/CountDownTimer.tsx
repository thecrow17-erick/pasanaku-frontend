'use client'

import { useState } from "react";
import { dataPeriods } from "../[playerId]/create-game/interface";

interface props{
  periods: dataPeriods[]
  value: number | undefined,
  onChange: (e: number)=> void
}
export const CountdownTimer = ({ periods,onChange,value }: props) => {
  return (
    <div>
      <p className="text-custom-blue-900 font-light text-lg">Tiempo de pagos</p>
      <div className='flex flex-wrap mb-5'>
        {
          periods.map(p => (
          <button 
          type="button"
          key={p.value}
          onClick={()=> onChange(p.value)}
          className={`bg-custom-blue-900 lg:m-2 mx-5 my-2 hover:bg-custom-blue-500 
          text-white font-semibold text-md py-2 px-4 rounded
            ${p.value === value && "bg-custom-gray-700 hover:bg-custom-gray-500"}
          `}
          >
          {p.label}
          </button>
          ))
        }
      </div>
    </div>
  );
};