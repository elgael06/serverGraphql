-- DROP DATABASE pruebas_01;
-- CREATE DATABASE
CREATE DATABASE pruebas_01;

-- CRATE TABLES
CREATE TABLE `pruebas_01`.`users` (
  `uuid` VARCHAR(36) DEFAULT (UUID()) PRIMARY KEY,
  `name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `is_active` BOOLEAN DEFAULT TRUE
);

CREATE TABLE `pruebas_01`.`users_auth` (
  `uuid` VARCHAR(36) DEFAULT (UUID()) PRIMARY KEY,
  `email` VARCHAR(100) NOT NULL,
  `user_id` VARCHAR(36),
  `password` VARCHAR(1000),
  `is_active` BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (`user_id`) REFERENCES `pruebas_01`.`users`(`uuid`)
);

CREATE TABLE `pruebas_01`.`profiles` (
  `uuid` VARCHAR(36) DEFAULT (UUID()) PRIMARY KEY,
  `name` VARCHAR(45) NOT NULL,
  `is_active` BOOLEAN DEFAULT TRUE
);

CREATE TABLE `pruebas_01`.`roles` (
  `uuid` VARCHAR(36) DEFAULT (UUID()) PRIMARY KEY,
  `name` VARCHAR(45) NOT NULL,
  `profile_id` VARCHAR(36),
  `is_active` BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (`profile_id`) REFERENCES `pruebas_01`.`profiles`(`uuid`)
);

-- INSERT DATA
-- create profile admin
INSERT INTO
  pruebas_01.profiles (name) VALUE('ADMIN');

-- create roles of admin
INSERT INTO
  pruebas_01.roles (name, profile_id) VALUE (
    'CREATE_USERS',
    (
      SELECT
        uuid profile_id
      FROM
        pruebas_01.profiles
    )
  );

INSERT INTO
  pruebas_01.roles (name, profile_id) VALUE (
    'VIEW_USERS',
    (
      SELECT
        uuid
      FROM
        pruebas_01.profiles
    )
  );

INSERT INTO
  pruebas_01.roles (name, profile_id) VALUE (
    'DELETE_USERS',
    (
      SELECT
        uuid
      FROM
        pruebas_01.profiles
    )
  );

INSERT INTO
  pruebas_01.roles (name, profile_id) VALUE (
    'ALTER_USERS',
    (
      SELECT
        uuid
      FROM
        pruebas_01.profiles
    )
  );

-- create user base prfile and sesion
INSERT INTO
  pruebas_01.users (name, last_name)
VALUES
  ('JHON', 'WICK');

INSERT INTO
  pruebas_01.users_auth (email, password, user_id)
VALUES
  (
    'JHON-WICK@ADMIN.COM',
    '1234',
    (
      SELECT
        uuid
      FROM
        pruebas_01.users
    )
  );