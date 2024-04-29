'use client'
import { useQuery } from "@tanstack/react-query"
import {allParticipantByPkGame} from '@/lib/query';

export const useParticipants = (id: number) => {

  const mutationAuth = useQuery({
    queryKey: ["participants", id],
    queryFn: ()=>allParticipantByPkGame(id),
    staleTime: 60 * 60 * 3600
  })

  return {
    ...mutationAuth
  }
}
