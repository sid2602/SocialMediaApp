const jwt = require('jsonwebtoken')

const authenticateToken = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split('')[1];

    if(token == null) return res.send({
        error: 'No authenticate token',
        success: false
    }) 

    jwt.verify(token,process.env.ACCESS_SECRET_TOKEN,(err,user)=>{
        if(err) return res.send({
            error: 'No longer access',
            success: false
        })

        req.user = user;
        next();
    })
} 