import Image from "next/image"
import LogoPasanaku from '@/assets/logo.png';
import BaderaBoliviana from '@/assets/Bandera_Bolivia.png';

export const HeaderAuth = () => {
  return (
    <header className="bg-custom-blue-900 w-full p-5">
      <div>
        <div className='flex flex-col w-auto whitespace-break-spaces'>
          <div className='flex flex-row items-center'>
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
    </header>
  )
}
