import {Meta} from '@/api/interface';
import { Period } from '@/interface/resPeriod';
export interface IResGamesID {
  meta: Meta;
  data: DataGame[];
}

export interface DataGame {
  id:                number;
  name:              string;
  number_of_players: number;
  cuota:             number;
  estado:            string;
  path_image:        null;
  description:       string;
  start_date:        Date;
  offer_time:        number;
  createdAt:         Date;
  updatedAt:         Date;
  period_id:         number;
  period:            Period;
}
