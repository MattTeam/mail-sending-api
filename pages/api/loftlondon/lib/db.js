import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST_LOFT,
    port: process.env.MYSQL_PORT_LOFT,
    database: process.env.MYSQL_DATABASE_LOFT,
    user: process.env.MYSQL_USER_LOFT,
    password: process.env.MYSQL_PASSWORD_LOFT
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