import { Meta } from "@/api/interface";

export interface IResError{
  meta: Meta;
  errors: errors;
}

export interface Error {
  type:     string;
  value:    string;
  msg:      string;
  location: string;
}


export interface errors{
  details: Error[] | string | string[]
}

