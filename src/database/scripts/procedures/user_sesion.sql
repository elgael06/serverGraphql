
DROP PROCEDURE IF EXISTS pruebas_01.user_login;

DELIMITER $$
CREATE PROCEDURE pruebas_01.user_login(IN _email VARCHAR(100), IN _password VARCHAR(100))
BEGIN
	SELECT 
	u.uuid id,
	u.name 
	,u.last_name
	,a.email
	,p.name profile
	, UUID() token
	FROM  pruebas_01.users u 
	INNER JOIN pruebas_01.users_auth a ON u.uuid = a.user_id
	INNER JOIN pruebas_01.profiles p ON p.uuid = a.profile_id
	WHERE u.is_active = 1 and a.email = _email and a.password = _password ;
END$$
DELIMITER