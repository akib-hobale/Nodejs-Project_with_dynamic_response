module.exports = (error,req,res,next)=>{
    // res.status(500).send({message:"Something went wrong"})
    return res.send(Response.sendResponse(false, "", error.message, error.status || 500));
}