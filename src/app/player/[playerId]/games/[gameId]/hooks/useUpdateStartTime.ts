'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IBodyStartTime } from "../interface";
import {  updateTimeStartGame } from "@/lib/query";

interface props{
  body: IBodyStartTime;
}

export const useUpdateStartTime = (id: number) => {
  const queryClient = useQueryClient()

  const mutationGame = useMutation({
    mutationFn: ({body}:props)=>updateTimeStartGame(id,body),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["game",id]})
    }
  })
  return {
    ...mutationGame
  }
}
