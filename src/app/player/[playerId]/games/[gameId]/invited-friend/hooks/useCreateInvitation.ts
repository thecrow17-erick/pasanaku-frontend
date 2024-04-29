'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IFormInvitation } from "../interface";
import { createInvitation } from "@/lib/query";

interface props{
  body: IFormInvitation;
}

export const useCreateInvitation = (id: number) => {
  const queryClient = useQueryClient()

  const mutationGame = useMutation({
    mutationFn: ({body}:props)=>createInvitation(id,body),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["invitations", id]})
    }
  })
  return {
    ...mutationGame
  }
}

