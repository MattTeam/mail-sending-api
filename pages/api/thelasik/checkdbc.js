import allowCors from "../../../allow-cors";

import excuteQuery from './lib/db';
import handler from"../../../utils/handler";
 

handler.get(async (req, res) => { 
    console.log("The next req : ",req);
    try {
        const result = await excuteQuery({query: 'SELECT * FROM user_addresses ',values: ''});
        // return result[0]; 
        console.log("the result : in logs" , result);

        res.status(200).json({ status: "OK 1", result: result });
    } catch (error) {
      console.log("the error : ", error);
      res.status(400).json({ status: "OK", result: error });
    }
});

module.exports = allowCors(handler);
