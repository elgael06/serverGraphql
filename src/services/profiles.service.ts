import { execute } from "../database/mysql.batabase";
import { procedures } from "../enums/procedures";
import { queries } from "../enums/queries"
import IProfile, { IProfileQuery, IProfileResponse } from "../models/IProfiles";
import IRole from "../models/IRole";

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

export const findProfileById = async (id: string) => {
  const profiles = await execute<IProfileQuery[]>(queries.profileId, [id]);
  console.log(`debug`, profiles[0]);
  const data = profiles.map((item) => ({
    id: item?.uuid,
    name: item?.name,
    isActive: item?.is_active,
  })) as IProfile[]
  console.log('data', data)
  return data[0];
}

export const deleteProfileById = async (id: string) => {
  try {
    await execute<IProfileQuery[]>(queries.profileDelete, [id]);
    console.log(`${id} eliminado`)
    return 'Eliminado!'
  } catch {
    return 'Error!'
  }
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

export const profileRoles = async (id: string) => {
  try {
    const data = await execute(queries.rolesProfile, [id]);
    if (Array.isArray(data) && data?.length > 0) {
      return data.map(item => ({
        id: item['uuid'],
        name: item['name'],
        isActive: item['is_active'],
      })) as IRole[];
    } return [];
  } catch (e) {
    console.log(e)
    return [];
  }
}