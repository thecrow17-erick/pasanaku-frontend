'use client'

import { useState } from "react";

export const CountdownTimer = () => {
  const [value, setvalue] = useState('');
  
  return (
    <div>
      <p className="text-custom-blue-900 font-light text-lg">Tiempo de pagos</p>
      <div className='flex flex-wrap mb-5'>
        <button 
        className='bg-custom-blue-900 lg:m-2 mx-5 my-2 hover:bg-custom-blue-500 text-white font-semibold text-md py-2 px-4 rounded'>
          10 días
        </button>

        <button 
        className='bg-custom-blue-900 lg:m-2 mx-5 my-2 hover:bg-custom-blue-500 text-white font-semibold text-md py-2 px-4 rounded'>
          15 días
        </button>

        <button 
        className='bg-custom-blue-900 lg:m-2 mx-5 my-2 hover:bg-custom-blue-500 text-white font-semibold text-md py-2 px-4 rounded'>
          30 días
        </button>

        <button 
        className='bg-custom-blue-900 lg:m-2 mx-5 my-2 hover:bg-custom-blue-500 text-white font-semibold text-md py-2 px-4 rounded'>
          45 días
        </button>
        <button 
        className='bg-custom-blue-900 lg:m-2 mx-5 my-2 hover:bg-custom-blue-500 text-white font-semibold text-md py-2 px-4 rounded'>
          Otro
        </button>
      </div>
    </div>
  );
};