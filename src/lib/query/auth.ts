import { IResLogin, ISignIn,IErrorLogin } from "@/app/(auth)/interface";
import {pasanakuAxios} from '@/api'

export const authPlayerSignIn = async(body: ISignIn):Promise<IResLogin> =>{
  try {
    const {data} = await pasanakuAxios.post<IResLogin>("auth/login",body);
    return data;
  } catch (error)  {
    throw error;
  }
}