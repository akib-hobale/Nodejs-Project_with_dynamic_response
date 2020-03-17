const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

module.exports = async (req, res, next) => {
    try {       
        const token = req.headers.authorization;
        const isValid = await User.findOne({where:{token : token}})      
        if(!isValid){
        return res.send(RESPONSE.sendResponse(false, "", CUSTOM_MESSAGE.AUTH_FAILED, STATUS_CODE.UNAUTHORIZED));  
        }
        else{
        const decoded = jwt.verify(token, ENVCONFIG.jWT_KEY);
        req.userData = decoded;
        next();
        }
    } catch (error) {
        return res.send(RESPONSE.sendResponse(false, "", CUSTOM_MESSAGE.AUTH_FAILED, STATUS_CODE.UNAUTHORIZED));
    }
};