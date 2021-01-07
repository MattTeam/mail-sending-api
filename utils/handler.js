import nextConnect from "next-connect";
import middleware from "./middleware";

export default nextConnect({
    onError(error, req, res){
        res.status(501).json({error : 'Sorry something happened ! '+error.message});
    },
    onNoMatch(req, res){
        res.status(401).json({error : 'Method '+req.method+' Not Allowed !'});
    }
}) 