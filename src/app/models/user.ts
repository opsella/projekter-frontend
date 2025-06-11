export class User {
  constructor(
    public user_id: string,
    public tenant_id: string,
    public username: string,
    public nickname: string,
    public first_name: string,
    public last_name: string,
    public email: string,
    public picture: string,
    public email_verified?: boolean,
  ) {
  }
}

export class UserPermission {
  constructor(
    public permission_name: string,
    public description: string
  ) {
  }
}
