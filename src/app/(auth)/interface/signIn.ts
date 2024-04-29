import {Meta} from '@/api/interface';

export interface IResLogin {
  meta: Meta;
  data: Data;
}
export interface ISignIn{
  email:        string;
  password:     string;

}

export interface IErrorLogin{
  meta: Meta;
  errors: details;
}
export interface details{
  details: detail[];
}
export interface detail{
  type:       string;
  value:      string;
  msg:        string;
  location:   string
}


export interface Data {
  id:         string;
  email:      string;
  name:       string;
  sexo:       null;
  ci:         string;
  telephone:  string;
  address:    string;
  password:   string;
  path_image: string;
  token_FCM:  string;
  createdAt:  Date;
  updatedAt:  Date;
}