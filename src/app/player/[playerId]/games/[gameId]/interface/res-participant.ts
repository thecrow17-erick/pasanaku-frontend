import {Meta} from '@/api/interface';


export interface IResParticipant{
  meta :    Meta;
  data:     DataParticipant[]
}

export interface DataParticipant {
  id:        number;
  owner:     boolean;
  game_id:   number;
  player:    Player;
}

export interface Player {
  id:         string;
  email:      string;
  name:       string;
  sexo:       null;
  ci:         string;
  telephone:  string;
  address:    string;
  password:   string;
  path_image: string;
  path_qr:    null;
  token_FCM:  string;
  createdAt:  Date;
  updatedAt:  Date;
}
