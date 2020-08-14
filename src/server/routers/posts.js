const express = require('express');
const router = express.Router();



const authenticateToken = require('../verify')

//Schemas
const Post = require('../modeles/Post');
const User = require('../modeles/User')

//add post route
router.post('/addPost',authenticateToken, async(req,res) => {

    const {text} = req.body;
    try{

        if(text.length === 0) return res.send({
            error: "You can't create post witchout content",
            success: false
        })
        //get _id

        const _id = res.locals._id;

        //create post

        const post = new Post({
            text
        })

        //get user
        const user = await User.findById(_id)

        post.userData = user;

        await post.save();

        return res.send({
            success: true,
            error: ''
        })

        
    }catch(error){
        return res.send({
            error: error.toString(),
            success: false
        })
    }
})


//get post route
router.get('/getPosts',authenticateToken,async(req,res) =>{
    let {start,limit} = req.query

    const startPost = parseInt(start);
    const limitPost = parseInt(limit)
    try{ 

            //get  5 posts
            const numberOfPosts = await Post.countDocuments();
            if(start<= numberOfPosts){
                
                

                
                const posts = await Post.find({}).sort({_id: -1}).skip(startPost).populate('userData','username email image').limit(limitPost);
               


                return res.send({
                    posts,
                    success: true,
                    error: ''
                    })
            }else{
                return res.send({
                    error: 'There is no more posts',
                    success: false,
                })
            }
        
    }catch(error){
        //send error
        return res.send({
            error,
            success: false,
            posts: ''
        })
    }

    
})



module.exports = router;
