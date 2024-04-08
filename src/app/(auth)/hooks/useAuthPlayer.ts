'use client'
import { useMutation } from "@tanstack/react-query"
import {authPlayerSignIn} from '@/lib/query';

export const useAuthPlayer = () => {
  const mutationAuth = useMutation({
    mutationFn: authPlayerSignIn,
  })

  return {
    ...mutationAuth
  }
}
