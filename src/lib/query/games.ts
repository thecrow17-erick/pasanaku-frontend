import {pasanakuAxios} from '@/api';
import { IFormGame, IResGameCreate } from '@/app/player/[playerId]/create-game/interface';
import { IBodyStartTime, IResStartTime, IResGamePk } from '@/app/player/[playerId]/games/[gameId]/interface';
import {IResGamesID} from '@/app/player/[playerId]/games/interface';

export const allGames = async(id: string):Promise<IResGamesID> =>{
  try {
    const {data} = await pasanakuAxios.get<IResGamesID>(`game/playerOwnerByPk/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
}

export const getByGamePk = async(id: number): Promise<IResGamePk> => {
  try {
    const {data} = await pasanakuAxios.get<IResGamePk>(`game/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
}

export const createGames = async(id: string, body: IFormGame):Promise<IResGameCreate> =>{
  try {
    const {data} = await pasanakuAxios.post<IResGameCreate>(`game/${id}`,body)
    return data;
  } catch (err) {
    throw err;
  }
}

export const updateTimeStartGame = async(id: number, body: IBodyStartTime):Promise<IResStartTime> =>{
  try {
    const {data} = await pasanakuAxios.put<IResStartTime>(`game/${id}`,body)
    return data;
  } catch (err) {
    throw err;
  }
}