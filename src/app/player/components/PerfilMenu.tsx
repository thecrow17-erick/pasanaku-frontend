import { MenubarContent,Menubar, MenubarItem, MenubarSeparator,MenubarMenu,MenubarTrigger } from "@/components/ui"
import { FaRegCreditCard } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
export const PerfilMenu = () => {
  return (
    <Menubar className="bg-custom-gray-300">
      <MenubarMenu>
        <MenubarTrigger className="text-white">AlejandraXSDXS</MenubarTrigger>
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
          <MenubarItem>
            <IoLogOut
                size={20}
                className="mr-5"
            />
            <p className="text-custom-blue-700">
              Ajustes
            </p>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
