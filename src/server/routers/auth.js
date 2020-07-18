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
    

    res.send({
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



module.exports = router;