import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST_EMRG,
    port: process.env.MYSQL_PORT_EMRG,
    database: process.env.MYSQL_DATABASE_EMRG,
    user: process.env.MYSQL_USER_EMRG,
    password: process.env.MYSQL_PASSWORD_EMRG
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