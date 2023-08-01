import IRole from "./IRole";

export type ProfileKey = 'uuid'
  | 'name'
  | 'is_active';

export interface IProfileQuery {
  uuid: string;
  name: string;
  is_active: boolean;
}

export interface IProfileResponse {
  RowDataPacket: IProfileQuery
}

export default interface IProfile {
  id?: string;
  name: string;
  isActive: boolean;
}

export interface ProfileRoles extends IProfile {
  roles: IRole[];
} 
