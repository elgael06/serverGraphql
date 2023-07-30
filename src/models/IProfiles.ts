import IRole from "./IRole";

export type ProfileKey = 'uuid'
  | 'name'
  | 'is_active';

export default interface IProfile {
  id?: string;
  name: string;
  isActive: boolean;
}

export interface ProfileRoles extends IProfile {
  roles: IRole[];
} 
