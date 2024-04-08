'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthSignIn } from "../components";

export default function signInPage(){
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-custom-blue-300 w-full h-screen">
        <div className="w-full py-10 flex justify-center">
          <div className="bg-white rounded-sm lg:w-2/3 px-5 xl:w-2/4 py-5 lg:py-0 w-full mx-5 bg-opacity-40">
            <div className=" text-zinc-900 w-full flex-col ">
              <h2 className=" text-center font-semibold text-xl">Bienvenido</h2>
              <div className="flex items-center mb-3">
                <hr className="h-0 border-b border-solid border-white grow" />
                <p className="mx-4 text-gray-600">Inicie sesion</p>
                <hr className="h-0 border-b border-solid border-white grow" />
              </div>
            </div>
            <AuthSignIn/>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  )
}