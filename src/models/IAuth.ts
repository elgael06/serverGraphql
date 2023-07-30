
export type AuthKey = 'id'
| 'userId'
| 'email'
| 'profileId'
| 'profile'
| 'isActive';

export default interface IAuth {
  id?: string;
  userId?: string;
  email: string;
  profileId?: string;
  profile?: string;
  isActive: boolean;
}
