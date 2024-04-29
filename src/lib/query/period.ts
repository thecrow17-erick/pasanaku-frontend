import {pasanakuAxios} from '@/api';
import { IResPeriod } from '@/interface/resPeriod';

export const allPeriod = async():Promise<IResPeriod> =>{
  try {
    const {data} = await pasanakuAxios.get<IResPeriod>(`period`);
    return data;
  } catch (err) {
    throw err;
  }
}