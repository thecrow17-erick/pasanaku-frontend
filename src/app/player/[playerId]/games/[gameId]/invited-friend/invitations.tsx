'use client'
import { useParams } from "next/navigation"
import { useAllInvitation } from "./hooks"
import { FormInvitedFriend, FriendsInvited } from "@/app/player/components"


export const Invitations = () => {
  const router =useParams()  
  const allInvitation = useAllInvitation(+router.gameId)

  return (
    <div className="bg-white rounded-sm lg:w-3/4 xl:w-3/5 py-10 lg:py-0 w-full mx-5 bg-opacity-40 lg:grid lg:grid-cols-2">

      <FormInvitedFriend/>

      <div className="lg:py-5 px-10">

        <h2 className="text-custom-blue-900 font-bold mt-5 text-xl">Lista de invitados</h2>      

        <div
          className='bg-white h-[500px] overflow-y-scroll w-full rounded-sm py-3 px-2'
        >
          {
            allInvitation.data && allInvitation.data.data.map((inv, i) => (
              <FriendsInvited key={i}
                telefono={inv.phone}
                correo={inv.email}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
