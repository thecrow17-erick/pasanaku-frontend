import { ISignIn, ISignInResponse } from "@/app/(auth)/interface";
import {pasanakuAxios} from '@/api'

export const authPlayerSignIn = async(body: ISignIn):Promise<ISignInResponse | undefined> =>{
  try {
    const {data,status} = await pasanakuAxios.post<ISignInResponse>("player/auth",body);

    return {
      ...data,
      status
    }
  } catch (error) {
    throw error;
  }
}