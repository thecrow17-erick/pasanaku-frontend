import { IResLogin, ISignIn,IErrorLogin, IResCreatePlayer } from "@/app/(auth)/interface";
import {pasanakuAxios} from '@/api'

export const authPlayerSignIn = async(body: ISignIn):Promise<IResLogin> =>{
  try {
    const {data} = await pasanakuAxios.post<IResLogin>("auth/login",body);
    return data;
  } catch (error)  {
    throw error;
  }
}

export const authPlayerCreate = async(body: FormData): Promise<IResCreatePlayer> => {
  try {
    const {data} = await pasanakuAxios.post<IResCreatePlayer>("player",body);
    return data;
  } catch (error)  {
    throw error;
  }
}