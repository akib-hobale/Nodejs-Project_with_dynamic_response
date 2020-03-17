
function getuser(req,res,next){
  //  return res.status(200).json({message:"Data fetch SuccessFuly"});


    return res.send(Response.sendResponse(true, "", CUSTOM_MESSAGE.RECORD_CREATED, STATUS_CODE.OK));
 }
 
 module.exports.getuser = getuser;