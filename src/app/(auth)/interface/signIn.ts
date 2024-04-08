export interface ISignIn{
  email:          string;
  password:       string;   
}

export interface ISignInResponse{
  message:    string;
  user:       UserAuth;
  status:     number;
}

export interface UserAuth {
  id:         string;
  email:      string;
  name:       string;
  sexo:       null;
  ci:         string;
  telephone:  string;
  address:    string;
  password:   string;
  path_image: string;
  createdAt:  string;
  updatedAt:  string;
}
