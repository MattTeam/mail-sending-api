const middleware = fn => async (req, res) => {
   
    var ipList = ['168.119.32.249','::1'];
    var IP = (req.headers['x-forwarded-for'] || '').split(',').pop() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress;
    var ipvar = IP.split("::ffff:");
    var ipAddr = ipvar[1];
    console.log("the ip address : ", ipvar);
    console.log("the st : ", ipList.indexOf(ipAddr));
    if(ipList.indexOf(ipAddr)>-1 || ipList.indexOf('::1')>-1){
      return await fn(req, res);
    }else{
      return res.status(500).json('You are not authorized : ( So sorry! )', ipvar); 
    } 
   
  }

export default middleware;
  