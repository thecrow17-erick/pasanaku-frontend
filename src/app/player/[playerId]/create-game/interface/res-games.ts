import { Meta } from "@/api/interface";

export interface IResGameCreate {
  meta: Meta
  data: Data;
}

export interface Data {
  id:                number;
  name:              string;
  number_of_players: number;
  cuota:             number;
  start_date:        Date;
  estado:            string;
  period_id:         number;
  description:       string;
  offer_time:        number;
  updatedAt:         Date;
  createdAt:         Date;
  path_image:        null;
}
