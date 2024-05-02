'use client'

import { Button, Input } from "@/components/ui"
import { ExtFile, FileInputButton, FileMosaic } from "@files-ui/react"
import Link from "next/link"
import { useState } from "react";
import { IFormSignUp } from "../../interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../validations";
import { useCreatePlayer } from "../../hooks";
import { useUserStore } from "@/store";
import { useRouter } from "next/navigation";
import { Error as TypeError, IResError } from "@/interface/errors";

export const AuthSignUp = () => {
  const [err, setErr] = useState<Array<string>>([]);
  const createPlayer = useCreatePlayer()
  const navigate = useRouter()
  const createUser =  useUserStore(state => state.setUser);
  const userId =  useUserStore(state => state.id);
  const { 
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm<IFormSignUp>({
    resolver: yupResolver(signUpSchema)
  })

  const [fileValue,setFileValue] = useState<ExtFile | undefined>(undefined);


  const updateFiles = (incommingFiles:ExtFile[]) => {
    console.log("incomming extFiles", incommingFiles);
    setFileValue(incommingFiles[0]);
  };
  const removeFile = () => {
    setFileValue(undefined);
  };

  
  const onSubmit:SubmitHandler<IFormSignUp> = (body)=>{
    if(fileValue !== undefined){
      const bodyData = new FormData();
      bodyData.append("file", fileValue.file!);
      
      Object.entries(body).map(([key, value]) =>bodyData.append(key,value) )
      createPlayer.mutate(bodyData,{
        onSuccess(data){
          console.log("Response: ", data);
          createUser({
            email: data.data.email,
            id: data.data.id,
            name: data.data.name,
            path_image: data.data.path_image,
          })
          navigate.push(`/player/${userId}/games`)
        },
        onError(error, variables, context) {
          console.log(error);
          setErr([...err,"Error 404"]);
        },
      })
    }
    setErr([...err,"Seleccione foto de perfil"]);
  }

  return (
    <div className="flex justify-center items-center">
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className="lg:w-2/4 py-10 md:w-3/4 w-full">
        {
          err.map((e,i) => (
            <p
            key={i}
            className="text-red-700 font-medium text-sm"  
            >{e}</p>
          ))
        }
        {
          errors.name && (
            <p
            className="text-red-700 font-medium text-sm"  
            >{errors.name.message}</p>
          )
        }
        <label
          className="text-custom-blue-900 font-medium text-base"
        >Nombre de usuario</label>
        <Input
        {...register("name")}
        className="mb-5"
        type="text"
        placeholder="username"
        />
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
            >{errors.password.message}</p>
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

        {
          errors.ci && (
            <p
            className="text-red-700 font-medium text-sm"  
            >{errors.ci.message}</p>
          )
        }
        <label
          className="text-custom-blue-900 font-medium text-base"
        >CI</label>
        <Input
        {...register("ci")}
        className="mb-5"
        type="text"
        placeholder="123456789"
        />
        {
          errors.address && (
            <p
            className="text-red-700 font-medium text-sm"  
            >{errors.address.message}</p>
          )
        }
        <label
          className="text-custom-blue-900 font-medium text-base"
        >Direccion</label>
        <Input
        className="mb-5"
        {...register("address")}
        type="text"
        placeholder="villa 1ro de mayo, c/6"
        />

        <div
          className="flex flex-col"
        >
          <label
          className="text-custom-blue-900 font-medium text-base"
          >Foto del grupo</label>
            <>
              {fileValue ? (
                <FileMosaic 
                className="mb-5"
                {...fileValue} onDelete={removeFile} preview />
              ) : (
                <FileInputButton 
                type="button"
                className="md:w-1/3 bg-custom-blue-700 w-full mb-5"
                value={fileValue ? [fileValue] : []} 
                accept="image/*"
                onChange={updateFiles} />
              )}
              <FileMosaic />
            </>
          </div>

        <div className="flex flex-col mb-5">
          <Link 
          href={"/signIn"}
            className="text-sm underline mb-3 text-custom-blue-900 font-semibold"
          >
            Ya tienes una cuenta? inicia sesion ahora mismo!
          </Link>
        </div>

        <Button
          className="bg-custom-blue-900 hover:bg-custom-blue-700 lg:w-2/5 sm:w-1/3 w-full"
          type="submit"
        >
          Inicie sesion
        </Button>
      </form>
    </div>
  )
}
