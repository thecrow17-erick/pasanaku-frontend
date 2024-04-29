import {pasanakuAxios} from '@/api';
import { IResAllInvitation,IFormInvitation,Invitation, IResInvitation } from '@/app/player/[playerId]/games/[gameId]/invited-friend/interface';

export const allInvitation = async(id: number):Promise<IResAllInvitation> =>{
  try {
    const {data} = await pasanakuAxios.get<IResAllInvitation>(`invitations/gameBypk/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
}

export const createInvitation = async(id: number, body: IFormInvitation):Promise<IResInvitation> =>{
  try {
    const {data} = await pasanakuAxios.post<IResInvitation>(`invitations/${id}`,body)
    return data;
  } catch (err) {
    throw err;
  }
}