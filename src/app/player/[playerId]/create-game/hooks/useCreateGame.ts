'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IFormGame } from "../interface";
import { createGames } from "@/lib/query";

interface props{
  id: string;
  body: IFormGame;
}

export const useCreateGame = () => {
  const queryClient = useQueryClient()

  const mutationGame = useMutation({
    mutationFn: ({id,body}:props)=>createGames(id,body),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["games"]})
    }
  })
  return {
    ...mutationGame
  }
}


