const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// Schema

const User = require('../modeles/User');


//Register

router.post('/register',async(req,res)=>{
    

    const {email,username,password} = req.body;

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

        res.send({
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


    return res.send({
        error: '',
        success: true
    })
    
    
})





module.exports = router;