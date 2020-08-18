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
                
                

                
                const posts = await Post.find({}).sort({_id: -1}).skip(startPost).populate('userData','username email image city brithday').limit(limitPost);

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

router.get('/likePost',authenticateToken, async(req,res)=>{
    const {postId,email} = req.query;
    console.log(email)
    try{

        const post = await Post.findById(postId)
        const findUser = post.whoLikes.indexOf(email);
        let like = false;


        if(findUser < 0 ){
            post.whoLikes.push(email);
            post.likes ++;
            like = true;

        }else{
            post.whoLikes.splice(findUser,1);
            post.likes --;
        }



         await post.save();



         if(like)
             return res.json({
                 success: true,
                 error: '',
             })
         else
             return res.json({
                 success: false,
                 error: ''
             })
         

        // post.whoLikes.push(res.locals._id)
        // console.log(post.likes)
        // await post.save();


    }catch(error){
        console.error(error);
    }
})

router.get('/removePost',authenticateToken,async(req,res)=>{
    const {postId} = req.query;

    try{
        
        const post = await Post.findById(postId);
        if(post){
            await post.remove();
            return res.json({
                success: true,
                error: ''
            })
        }else return res.json({
            success: false,
            error: 'post not found'
        })
         

    }catch(error){
        console.error(error)
    }

})

module.exports = router;
