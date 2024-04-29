import * as yup from 'yup';

export const validationFormInvitation = yup.object({ 
    guest: yup.string().email().required(),
    phone: yup.string().min(8).max(8).required(),
})