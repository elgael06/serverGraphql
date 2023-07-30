
export type RoleKey = 'uuid'
  | 'name'
  | 'profile_id'
  | 'is_active';

export default interface IRole {
  id?: string;
  name: string;
  profileId?: string;
  profile?: string;
  isActive: boolean;
}
