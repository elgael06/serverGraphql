export enum queries {
  users = 'SELECT * FROM pruebas_01.users;',
  profiles = 'SELECT * FROM pruebas_01.profiles;',
  profileId = 'SELECT * FROM pruebas_01.profiles WHERE uuid = ?;',
  profileDelete = 'DELETE FROM pruebas_01.profiles WHERE  uuid = ?;',
  roles = 'SELECT * FROM pruebas_01.roles;',
  rolesProfile = 'SELECT * FROM pruebas_01.roles r WHERE r.profile_id = ?;',
}
