'use client'
import { useQuery } from "@tanstack/react-query"
import {allGames} from '@/lib/query';
import { useUserStore } from "@/store";

export const useAllGames = () => {
  const userId = useUserStore(state => state.id)

  const mutationAuth = useQuery({
    queryKey: ["games",userId],
    queryFn: ()=>allGames(userId)
  })

  return {
    ...mutationAuth
  }
}
