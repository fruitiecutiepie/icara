import postgres from 'postgres';

const sql = postgres({
  host: process.env.INSTANCE_UNIX_SOCKET,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  max: 20,
});

export default sql;