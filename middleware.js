const middleware = fn => async (req, res) => {
   
    var ipList = ['168.119.32.249'];
    var IP = (req.headers['x-forwarded-for'] || '').split(',').pop() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress;
    var ipvar = IP.split("::ffff:");
    var ipAddr = ipvar[1];
    if(ipList.indexOf(ipAddr)>-1){
      return res.status(500).json('You are not authorized :( so sorry! ', ipvar);
    }else{
      return await fn(req, res);
    } 
   
  }

export default middleware;
  