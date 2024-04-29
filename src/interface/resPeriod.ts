import { Meta } from "@/api/interface";

export interface IResPeriod {
  meta: Meta;
  data: Period[];
}

export interface Period {
  id:        number;
  name:      string;
  createdAt: Date;
  updatedAt: Date;
}
