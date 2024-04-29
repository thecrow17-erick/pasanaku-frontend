import {pasanakuAxios} from '@/api';
import { IResParticipant } from '@/app/player/[playerId]/games/[gameId]/interface';

export const allParticipantByPkGame = async(id: number):Promise<IResParticipant> =>{
  try {
    const {data} = await pasanakuAxios.get<IResParticipant>(`participant/gamePk/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
}
