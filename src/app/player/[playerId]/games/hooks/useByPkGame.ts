'use client'
import { useQuery } from "@tanstack/react-query"
import {getByGamePk} from '@/lib/query';

export const useByPkGame = (id: number) => {

  const mutationAuth = useQuery({
    queryKey: ["game",id],
    queryFn: ()=>getByGamePk(id),
    staleTime: 60 * 60 * 3600
  })

  return {
    ...mutationAuth
  }
}
