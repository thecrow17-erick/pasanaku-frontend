import { Meta } from "@/api/interface";

export interface IFormSignUp{
  name:         string;
  email:        string;
  ci:           string;
  password:     string;
  address:      string;
}

export interface IResCreatePlayer{
  meta:         Meta;
  data:         UserData;
}


export interface UserData {
  id:         string;
  ci:         string;
  email:      string;
  name:       string;
  address:    string;
  telephone:  string;
  sexo:       null;
  password:   string;
  token_FCM:  null;
  updatedAt:  Date;
  createdAt:  Date;
  path_image: string;
  path_qr:    null;
}
