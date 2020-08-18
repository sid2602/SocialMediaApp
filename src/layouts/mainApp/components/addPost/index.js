import React,{useState,useRef} from 'react';

import {CreatePost,ShareButton,Wrapper,Overlay} from './style'
import Loader from '../../../signComponents/loader'
//Redux

import addPost from '../../../../data/operations/addNewPost.operation'
import getPosts from '../../../../data/operations/getPosts.operation'

import {connect} from 'react-redux'



const AddPost = ({addPost,loadingPost,success,error,setOpenAddPostModal,openAddPostModal}) => {

    
    const postContent = useRef(null);

    const addNewPost = () =>{
        
        //Post text
        const PostData = { text: postContent.current.value }
        
        addPost(PostData);
        
        //if no get posts

        if(success === false) alert(error)
        else{
            setOpenAddPostModal(false);
            postContent.current.value="";
            window.location.reload();
        }

    }

    return ( 
        <Wrapper className="addPost">
            <Overlay modal={openAddPostModal? true: false} onClick={()=>setOpenAddPostModal(false)}/>
            <CreatePost modal={openAddPostModal? true: false}>
                <label htmlFor="newPost">Create new post</label>
                {loadingPost && !openAddPostModal ? <Loader/>:<textarea id="newPost" name="newPost" rows="4" cols="50" placeholder="How are You?" onClick={()=>setOpenAddPostModal(true)} ref = {postContent}/>}
                <ShareButton modal={openAddPostModal? true: false} onClick ={addNewPost}>Share</ShareButton>
             </CreatePost>
        </Wrapper>
     );
}

const mapStateToProps = state =>({
    loadingPost: state.addNewPost.loading,
    error: state.addNewPost.error,
    success: state.addNewPost.success
})

const mapDispatchToProps = dispatch =>({
    addPost: (data)=>dispatch(addPost(data)),
})

const ConectedApp = connect(mapStateToProps,mapDispatchToProps)(AddPost)
 
export default ConectedApp;