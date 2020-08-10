const express = require('express');
const router = express.Router();
const multer = require('multer');


const authenticateToken = require('../verify')

//Schema

const User = require('../modeles/User');

//Upload image

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,`../../public/uploads/`)
    },
    filename: function(req,file,cb){
        cb(null,new Date().getTime()+file.originalname)
    }
})

const fileFilter = (req,file,cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(null,false)
    }
}

const upload = multer({
    storage:storage,
    limits:{ fileSize:1024*1024*5 },
    fileFilter: fileFilter
})



//Get Data from db

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


//Update Profile

router.post('/updateProfile',authenticateToken, upload.single('profileImage'),async(req,res)=>{

    // console.log(req.file)

    const {username,city,brithday} = req.body;
    const _id = res.locals._id;
    let errors = '';
    // console.log(req.file)

    try{

        if(req.file)
            await User.updateOne({_id},{$set: {image: req.file.filename}})

        if(username.length >= 6)
            await User.updateOne({_id},{$set: {username}})
        else if(username.length >= 1)
            errors+='Username has to be longer than 6 characters!'


        if(city.length >= 3)
           await User.updateOne({_id},{$set: {city}})
        else if(city.length >= 1)
            errors+='\n City has to be longer than 6 characters!'

        if(brithday.length>=10)
            await User.updateOne({_id},{$set: {brithday}})
        else if(brithday>=1)
            errors+='\n fill property brithday form!'


        if(errors) return res.send({
                error: errors,
                success: false
            })
        

        return res.send({
            error:"",
            success: true
        })

    }catch(error){
        console.error(error)
    }
    
})

module.exports = router;
