import { Meta } from "@/api/interface";

export interface IResGamePk{
  meta:    Meta;
  data:    GameRes;
}

export interface GameRes {
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

export interface Period {
  id:        number;
  name:      string;
  createdAt: Date;
  updatedAt: Date;
}
