DROP PROCEDURE IF EXISTS pruebas_01.user_profile;

DELIMITER $$
CREATE PROCEDURE pruebas_01.user_profile(IN _id VARCHAR(36))
BEGIN
	SELECT 
		p.uuid profile_id
		,p.name profile
		,r.uuid role_id
		,r.name role
	FROM  pruebas_01.users u 
	INNER JOIN pruebas_01.users_auth a ON u.uuid = a.user_id
	INNER JOIN pruebas_01.profiles p ON p.uuid = a.profile_id
	INNER JOIN pruebas_01.roles r ON r.profile_id = a.profile_id
	WHERE u.is_active = 1 and u.uuid = _id;
END$$
DELIMITER