'use client'

import Image from 'next/image'
import LogoPasanaku from '@/assets/logo.png';
import BaderaBoliviana from '@/assets/Bandera_Bolivia.png'
import { PerfilMenu } from './PerfilMenu';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store';
export const HeaderHome = () => {
  const userId = useUserStore(state => state.id);
  const router = useRouter()
  return (
    <header className="bg-custom-blue-900 w-full p-5 flex lg:flex-row flex-col">
      <div>
        <div className='flex flex-col w-auto whitespace-break-spaces'>
            <div className='flex flex-row items-center cursor-pointer'
              onClick={()=>router.push(`/player/${userId}/games`)}
            >
              <Image
                src={LogoPasanaku}
                alt='Logo'
                width={105}
                height={108}
                />
              <h2 className='text-2xl ml-3 font-bold text-white'>PASANAKU</h2>
              <div className='ml-3'>
                <Image
                  src={BaderaBoliviana}
                  alt='badera boliviana'
                  width={50}
                  />
              </div>
            </div>
            <p className='text-white font-normal'>
              Bienvenido, al juego pasanaku
            </p>  
          </div>
        </div>

      <div className='lg:flex-1'/>
      
      <div className='p-5 flex items-center'>
        <PerfilMenu/>
      </div>
    </header>
  )
}
