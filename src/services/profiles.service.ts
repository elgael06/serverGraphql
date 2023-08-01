import { execute } from "../database/mysql.batabase";
import { procedures } from "../enums/procedures";
import { queries } from "../enums/queries"
import IProfile, { IProfileQuery, IProfileResponse } from "../models/IProfiles";

export const findProfiles = async () => {
  const profiles = await execute<IProfileQuery[]>(queries.profiles, []);
  console.log(`debug`, profiles[0]);
  const data = profiles.map((item) => ({
    id: item?.uuid,
    name: item?.name,
    isActive: item?.is_active,
  })) as IProfile[]
  console.log('data', data)
  return [...data];
}

export const addProfile = async (value: IProfile): Promise<IProfile | null> => {
  const data = await execute(procedures.profileAdd, [value.name, value.isActive]);
  if (Array.isArray(data) && data?.length > 0) {
    const [item = null] = data[0] as IProfileQuery[];
    return {
      id: item?.uuid,
      name: item?.name || '',
      isActive: item?.is_active || false,
    }
  } return null;
}