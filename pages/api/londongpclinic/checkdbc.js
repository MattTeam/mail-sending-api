import excuteQuery from './lib/db';
import handler from"../../../utils/handler";
 

handler.get(async (req, res) => { 
    try {
        const result = await excuteQuery({query: 'SELECT * FROM new_menus',values: ''});
        // return result[0]; 
        console.log("the result : ", result);

        res.status(200).json({ status: "OK", result: result });
    } catch (error) {
      console.log("the error : ", error);

        res.status(400).json({ status: "OK", result: error });
    }
});

module.exports = handler;
