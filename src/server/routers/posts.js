const express = require('express');
const router = express.Router();

const authenticateToken = require('../verify')

//Schema
const Post = require('../modeles/Post');

router.post('/addPost',authenticateToken, async(req,res) => {
    const {email,username,image,text} = req.body;

    try{

    if(text.length === 0) return res.send({
        error: "You can't create post witchout content",
        success: false
    })

    const post = new Post({
        email,
        username,
        image,
        text
    })

    await post.save();

    return res.send({
        success: true,
        error: ''
    })

        
    }catch(error){
        return res.send({
            error: err.toString(),
            success: false
        })
    }
})


module.exports = router;
