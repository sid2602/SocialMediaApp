import React,{useState,useRef} from 'react';

import {CreatePost,ShareButton,Wrapper,Overlay} from './style'
import Loader from '../../../../components/loader'
//Redux

import addPost from '../../../../data/operations/addNewPost.operation'

import {connect} from 'react-redux'



const AddPost = ({data,addPost,loadingPost,success,error}) => {

    const [isOpen,setIsOpen] = useState(false);
    const postContent = useRef(null);

    const addNewPost = () =>{
        const {email,username,image} = data

        const PostData = {
            email,
            username,
            image,
            text: postContent.current.value
        }

        addPost(PostData);
        
        if(success === false) alert(error)
        else{
            setIsOpen(false);
            postContent.current.value="";
        }

    }

    return ( 
        <Wrapper>
            <Overlay modal={isOpen? true: false} onClick={()=>setIsOpen(false)}/>
            <CreatePost modal={isOpen? true: false}>
                <label htmlFor="newPost">Create new post</label>
                {loadingPost && !isOpen ? <Loader/>:<textarea id="newPost" name="newPost" rows="4" cols="50" placeholder="How are You?" onClick={()=>setIsOpen(true)} ref = {postContent}/>}
                <ShareButton modal={isOpen? true: false} onClick ={addNewPost}>Share</ShareButton>
             </CreatePost>
        </Wrapper>
     );
}

const mapStateToProps = state =>({
    data: state.userDataReducer.data,
    loading: state.userDataReducer.loading,
    loadingPost: state.addNewPost.loading,
    error: state.addNewPost.error,
    success: state.addNewPost.success
})

const mapDispatchToProps = dispatch =>({
    addPost: (data)=>dispatch(addPost(data))
})

const ConectedApp = connect(mapStateToProps,mapDispatchToProps)(AddPost)
 
export default ConectedApp;