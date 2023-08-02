import { booleanArg, extendType, nonNull, objectType, stringArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Role = objectType({
  name: "Role",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.nonNull.boolean("isActive");
  },
  description: 'Conjunto de roles de accesos pertenecientes a un perfil.',
});

