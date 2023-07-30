export type UserKey = 'uuid'
  | 'name'
  | 'last_name'
  | 'is_active';

export default interface IUser {
  id?: string;
  name: string;
  lastName: string;
  isActive: boolean;
}

