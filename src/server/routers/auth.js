const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const upload = multer({dest:'uploads/'});

const authenticateToken = require('../verify')

// Schema

const User = require('../modeles/User');

router.get('/', authenticateToken ,async (req,res)=>{
   
    const token = req.cookies.accessToken;

    try{
        const _id = res.locals._id;
        const user = await User.findOne({_id});
        const data = {
            username: user.username,
            email:user.email,
            image: user.image,
            city: user.city,
            brithday: user.brithday
        }

        res.send({
            error: '',
            success: true,
            data
        })

    }catch(err){
        res.send({
            error: "Invalid token",
            success: false
        })
    }
    

})

//User is logged ?

router.get('/logged', authenticateToken,(req,res)=>{
    res.send({
        success:true,
    })
})

//Register

router.post('/register',async(req,res)=>{
    

    const {email,username,brithday,city,password} = req.body;

    //Check if email exist

    const emailExist = await User.findOne({email});
    
    if(emailExist) 
     return res.send({
        error: 'Email exist',
        success: false
    });

    try{
        //hash password
        
        const hashedPassword = await bcrypt.hash(password,10);
        
        //create new user

        const user = new User({
            email,
            username,
            brithday,
            city,
            password: hashedPassword
        })

        //try to save user in database

        await user.save();
        
        return res.send({
            error: "",
            success: true
        })

    }catch(err){
        //Send some error

        return res.send({
            error: err.toString(),
            success: false
        })
    }

})

router.post('/login', async (req,res)=>{
    const {email,password} = req.body;

    //find user

    const user = await User.findOne({email});

    if(!user)
        return res.send({
            error: "Invalid Email",
            success: false,
        })
    
    //match password

    const match = await bcrypt.compare(password,user.password)

    if(!match)
        return res.send({
            error: 'Invalid Password',
            success: false
        })
    
    const accessToken = await jwt.sign({_id:user._id},process.env.ACCESS_SECRET_TOKEN)
    
    res.cookie('accessToken',accessToken,{
        maxAge: 3600 *24 *24,
        httpOnly: true,
        // secure: true
    })
    
    const userData = {
        username: user.username,
        email: user.email,
        image: user.image
    }

    // console.log(user)

    return res.send({
            error: '',
            success: true,
            userData   
    })
       
        
   
})

router.get('/logOut',(req,res)=>{

    const token = req.cookies.accessToken

    if(!token){

        return res.send({
            error: 'You are not log in',
            success: 'false',
        })

    }

    res.clearCookie('accessToken')

    return res.send({
        error:"",
        success: true
    })

})



module.exports = router;