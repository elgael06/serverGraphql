import { booleanArg, extendType, nonNull, objectType, stringArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 
import { addProfile, findProfiles } from "../services/profiles.service";

export const Profile = objectType({
  name: "Profile",
  definition(t) {
    t.nonNull.string("id"); 
    t.nonNull.string("name");
    t.nonNull.boolean("isActive");
      
  },
});

export const ProfileMutation = extendType({  // 1
  type: "Mutation",    
  definition(t) {
    t.nullable.field("updateProfile", {
      type: "Profile",
      args: {
        name: nonNull(stringArg()),
        isActive: nonNull(booleanArg()),
      },
      async resolve(parent, args, context) {
        const { name, isActive } = args;
        const data = await addProfile({name, isActive});
        return data!== null ? {id: data.id || '', name, isActive} : null;
      },
    });
  }
})

export const ProfileQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("all", {
      type: "Profile",
      async resolve(parent, args, context) {
        const data = await findProfiles();
        return data as NexusGenObjects["Profile"][];
      },
    });
  },
});
