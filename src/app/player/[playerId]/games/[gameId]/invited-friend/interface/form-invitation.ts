export interface IFormInvitation {
  //el creador
  owner:     string;
  //el invitado
  guest:     string;
  
  phone:     string;
  player_id: string;
}

export interface IFormInvitationYup{
  guest:     string;
  phone:     string;
}
