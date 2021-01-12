import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.MYSQL_HOSTN,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASEN,
    user: process.env.MYSQL_USERN,
    password: process.env.MYSQL_PASSWORDN
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