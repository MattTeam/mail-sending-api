import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST_THELASIC,
    port: process.env.MYSQL_PORT_THELASIC,
    database: process.env.MYSQL_DATABASE_THELASIC,
    user: process.env.MYSQL_USER_THELASIC,
    password: process.env.MYSQL_PASSWORD_THELASIC
  }
});

export default async function excuteQuery({ query, values }) {
    try {
      const results = await db.query(query, values); 
      await db.end();
      return results;
    } catch (error) { 
      return  error ;
    }
  }