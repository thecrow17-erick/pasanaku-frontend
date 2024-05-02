import * as yup from 'yup'

export const signUpSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(2).required(),
  ci:       yup.string().matches(/^[0-9]+$/,{
    message: "Ingrese un ci valido"
  }).min(6).max(8).required(),
  address:  yup.string().min(2).required()
})