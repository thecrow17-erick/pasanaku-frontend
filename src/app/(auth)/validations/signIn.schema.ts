import * as yup from 'yup'

export const signInSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(2).required()
})