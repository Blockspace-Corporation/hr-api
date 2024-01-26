class User {
  id?: number = 0;
  company_id?:            number = 0;
  username:              string = ' ';
  password:              string = ' ';
  fullname:              string = ' ';
  phone_number:          string = ' ';
  created_by?:            number = 0;
  create_date:           Date = new Date;
  updated_by?:            number = 0;
  update_date:           Date = new Date;
  id_locked:             boolean = true;
}

export default User;
