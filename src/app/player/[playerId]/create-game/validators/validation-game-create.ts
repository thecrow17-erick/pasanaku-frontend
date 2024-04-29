import * as yup from 'yup';

export const validationFormGame = yup.object({ 
  name: yup.string().required(),
  description: yup.string().required(),          
  number_of_players: yup.number().required(),   
  period_id: yup.number().required(),          
  cuota:  yup.number().integer().required(),    
  estado: yup.string().default("En espera"),          
  start_date:  yup.date().required(),       
  offer_time:  yup.string().max(1).required()         
})