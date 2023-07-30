
require('dotenv').config();

export const DATA_SOURCES = {
  mySqlDataSource: {
    MY_SQL_DB_HOST: process.env.MY_SQL_DB_HOST,
    MY_SQL_DB_USER: process.env.MY_SQL_DB_USER,
    MY_SQL_DB_PASSWORD: process.env.MY_SQL_DB_PASSWORD,
    MY_SQL_DB_PORT: process.env.MY_SQL_DB_PORT,
    MY_SQL_DB_DATABASE: process.env.MY_SQL_DB_DATABASE,
    MY_SQL_DB_CONNECTION_LIMIT: process.env.MY_SQL_DB_CONNECTION_LIMIT ? parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT) : 4,
  }
};
