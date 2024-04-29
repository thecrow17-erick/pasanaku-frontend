import { Meta } from "@/api/interface";

export interface IResAllInvitation {
  meta: Meta;
  data: Invitation[];
}

export interface IResInvitation {
  meta: Meta;
  data: Invitation;
}

export interface Invitation {
  id:        number;
  phone:     string;
  email:     string;
  createdAt: Date;
  updatedAt: Date;
  game_id:   number;
  player_id: string;
}
