
import { IoMdPersonAdd } from "react-icons/io";
import { Button, Input } from '@/components/ui'
import { FriendsInvited } from '../card';



export const InvitedFriend = () => {
  return (
    <div className="bg-white rounded-sm lg:w-3/4 xl:w-3/5 py-10 lg:py-0 w-full mx-5 bg-opacity-40 lg:grid lg:grid-cols-2">
        <form className="lg:py-5 px-10">
          <h2 className="text-custom-blue-900 font-bold mb-5 text-xl">Invitar amigos</h2>

          <label className="text-custom-blue-900 font-light text-lg">Numero de telefono</label>
          <Input
            className="mb-5"
            name="telefono"
            placeholder="ej: 76679596"
          />

          <label className="text-custom-blue-900 mt-5 font-light text-lg">Correo electronico</label>
          <Input
            className="mb-5"
            name="correo"
            placeholder="ej: correo@correo.com"
          />

            <Button
              className="bg-custom-blue-900 hover:bg-custom-blue-700 w-auto"
            > 
              <IoMdPersonAdd
                size={20}
                className="mr-2"
              />
              Invitar
            </Button>

        </form>  

        <div className="lg:py-5 px-10">

          <h2 className="text-custom-blue-900 font-bold mt-5 text-xl">Lista de invitados</h2>      

          <div
            className='bg-white w-full rounded-sm py-3 px-2'
          >
            {
              Array.from({length: 10}).map((_, i) => (
                <FriendsInvited key={i}
                  telefono="231412"
                  correo="correo@correo.com"
                />
              ))
            }
          </div>
        </div>
    </div>
  )
}
