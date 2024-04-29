'use client'
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import Link from "next/link"

import { Button, Input } from "@/components/ui"
import { signInSchema } from "../../validations";
import { ISignIn,IErrorLogin } from "../../interface";
import { useAuthPlayer } from "../../hooks";
import { useState } from "react";
import { useUserStore } from "@/store";

export const AuthSignIn = () => {

  const [err, setErr] = useState<string[]>([])
  const setUser =  useUserStore(state => state.setUser)
  const {
    register,
    handleSubmit,
    formState:{
    errors
    }
  } = useForm<ISignIn>({
    resolver: yupResolver(signInSchema)
  });

  const authPlayer = useAuthPlayer();
  
  const router = useRouter()
  
  const onSubmit:SubmitHandler<ISignIn> = (data) => {
    authPlayer.mutate(data,{
      onSuccess(data) {
        console.log(data);
        if(data?.meta.code === 200){
          setUser({
            id: data.data.id,
            name: data.data.name,
            path_image: data.data.path_image,
            email: data.data.email,
          })
          return router.push(`/player/${data.data.id}/games`)
        }
      },
      onError(error) {
        const err : IErrorLogin = error.response.data;
        setErr(err.errors.details.map(e => (e.msg)))
      },
    })

  };
  

  return (
    <div className="flex justify-center items-center">
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className="lg:w-2/4 py-10 md:w-3/4 w-full">
        {
            err.length > 0 && (
              <p
              className="text-red-700 font-medium text-sm"  
              >{err}</p>
            )
        }
        {
          errors.email && (
            <p
            className="text-red-700 font-medium text-sm"  
            >{errors.email.message}</p>
          )
        }
        <label
          className="text-custom-blue-900 font-medium text-base"
        >Correo</label>
        <Input
        {...register("email")}
        className="mb-5"
        type="email"
        placeholder="correo@correo.com"
        />


        {
          errors.password && (
            <p
            className="text-red-700 font-medium text-sm"
            >{errors.password.message}!</p>
          )
        }
        <label
          className="text-custom-blue-900 font-medium text-base"
        >Password</label>
        <Input
        {...register("password")}
        className="mb-5"
        type="password"
        placeholder="*********"
        />  

        <div className="flex flex-col mb-5">
          <Link 
          href={"/signUp"}
            className="text-sm underline mb-3 text-custom-blue-900 font-semibold"
          >
            No tienes una cuenta? create una ahora mismo!
          </Link>
          <Link href={"/auth/signUp"}
            className="text-sm underline text-custom-blue-900 font-semibold"
          >
            Olvidaste tu password? recuperala!
          </Link>
        </div>

        <Button
          className="bg-custom-blue-900 hover:bg-custom-blue-700 lg:w-2/5 sm:w-1/3 w-full"
          type="submit"
          disabled={authPlayer.isPending}
        >
          Inicie sesion

        </Button>
      </form>
    </div>
  )
}
