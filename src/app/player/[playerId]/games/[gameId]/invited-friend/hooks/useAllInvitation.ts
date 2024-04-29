'use client'
import { useQuery } from "@tanstack/react-query"
import {allInvitation} from '@/lib/query';

export const useAllInvitation = (id: number) => {

  const mutationAuth = useQuery({
    queryKey: ["invitations", id],
    queryFn: ()=>allInvitation(id)
  })

  return {
    ...mutationAuth
  }
}
