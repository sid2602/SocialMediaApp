const jwt = require('jsonwebtoken')

module.exports = authenticateToken = (req,res,next) => {
    const token = req.cookies.accessToken;

    if(token == null) return res.send({
        error: 'No authenticate token',
        success: false
    }) 

    try{
        const decoded = jwt.verify(token,process.env.ACCESS_SECRET_TOKEN);
        const _id = decoded._id;
        res.locals._id = _id;
        next();
    }catch(err){
        res.send({
            error: "Invalid token",
            success: false
        })
    }

}