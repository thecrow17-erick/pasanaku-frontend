'use client'

import React, { FC } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

interface Props {
  correo:   string;
  telefono: string;
}

export const FriendsInvited:FC<Props> = ({correo,telefono}) => {
  return (
    <div className='bg-custom-blue-900 mt-2 px-2 flex'>
      <div className='flex-1'>
        <p className='text-white text-sm'>telefono: {telefono}</p>
        <p className='text-white text-sm'>correo: {correo}</p>
      </div>

      <div className='flex items-center'>
        <FaEdit 
          size={25}
          color='yellow'
          className='cursor-pointer mr-2'
        />
        <MdDelete 
          className='cursor-pointer'
          size={25}
          color='red'
        />
      </div>
    </div>
  )
}
