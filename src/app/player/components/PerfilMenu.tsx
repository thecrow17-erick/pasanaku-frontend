'use client'

import { MenubarContent,Menubar, MenubarItem, MenubarSeparator,MenubarMenu,MenubarTrigger } from "@/components/ui"
import { useUserStore } from "@/store";
import { FaRegCreditCard } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
// import Image,{ImageLoader} from 'next/image';
// import { pathImageUrl } from "../helper";
export const PerfilMenu = () => {
  const name = useUserStore(state => state.name)
  const clearUser =  useUserStore(state => state.clearUser)


  return (
    <Menubar className="bg-custom-gray-300">
      <MenubarMenu>
        <MenubarTrigger className="text-white">
          <div className="flex flex-row items-center">
            <div className="mr-5">
              {name}  
            </div>     
            {/* <div className="rounded-full w-8 h-8 flex items-center justify-center bg-white">
              <Image
                src={pathImageUrl(idPlayer,pathImage)}
                width={25}
                height={25}
                alt={pathImage}
              />
            </div>        */}
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FaRegCreditCard
              size={20}
              className="mr-5"
            />
            <p className="text-custom-blue-700">
              Mis cuentas
            </p>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <IoMdSettings
                size={20}
                className="mr-5"
            />
            <p className="text-custom-blue-700">
              Ajustes
            </p>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem
            onClick={
              ()=> clearUser()
            }
          >
            <IoLogOut
                size={20}
                className="mr-5"
            />
            <p className="text-custom-blue-700">
              Cerrar sesion
            </p>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
