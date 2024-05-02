'use client'
import { useMutation } from "@tanstack/react-query"
import {authPlayerCreate} from '@/lib/query';

export const useCreatePlayer = () => {
  const mutationAuth = useMutation({
    mutationFn: authPlayerCreate,
  })

  return {
    ...mutationAuth
  }
}
