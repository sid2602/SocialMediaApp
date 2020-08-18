import React,{useState,useEffect} from 'react'

import {Wrapper,PostContent,ImageDiv,Actions} from './style'
import Modal from '../postModal'

const Post = ({data,userData}) => {




    const {username,image} = data.userData;
    
    //post is liked
    const [isPostLiked,setPostLiked] = useState(false);
    const [likes,setLikes] = useState(data.likes)

    //open post modal
    const [openPostModal,setOpenPostModal] = useState(false);


    const typeOfElement ={
        WRAPPER: "Wrapper",
        LIKE_BUTTON: 'LikeButton'
    }

    //check is post liked now 

    let postLiked = false

    const handleClick = (element) => {
        if(element === typeOfElement.WRAPPER && !postLiked)
            openModal();
        else if(element === typeOfElement.LIKE_BUTTON){
            likePost();
            postLiked = true;
        }else {
            postLiked = false;
        }
           
    }   

    const openModal = () =>{
        setOpenPostModal(true)
    } 


    //fetch when you click like button

    const likePost = async() => {

        const options = {credentials: 'include'}

        const response = await fetch(`http://localhost:4000/api/likePost?postId=${data._id}&email=${userData.email}`,options);
        const json = await response.json();
        
        if(json.success){
            setPostLiked(true)
            setLikes(likes + 1)
        }
            
        else{
            setPostLiked(false)
            setLikes(likes - 1);
        }

    } 

    

    useEffect(()=>{
        //if post is liked set post liked
        if(data.whoLikes.indexOf(userData.email) >= 0){
            setPostLiked(true);
        }else{
            setPostLiked(false)
        }

    },[setPostLiked,data,userData])

    return (
        <>
            <Wrapper onClick={()=>handleClick(typeOfElement.WRAPPER)}>
                <PostContent>
                    <h2>{username}</h2>
                    <p>{data.text.length > 155 ? data.text.substring(0,155) + ' ...': data.text}</p>
                    <Actions active={isPostLiked}>
                        <button onClick={()=>handleClick(typeOfElement.LIKE_BUTTON)} ><i className="fas fa-thumbs-up"></i> {likes}</button>
                        {/* <button><i className="fas fa-comments"></i> 4 coments</button> */}
                    </Actions>
                </PostContent>
                <ImageDiv>
                    <img src={`uploads/${image}`} alt="User"/>
                </ImageDiv>
            </Wrapper>
            {openPostModal && <Modal setOpenPostModal = {setOpenPostModal} data ={data} userData={userData}/>}
        </>
     );
}
 
export default Post;