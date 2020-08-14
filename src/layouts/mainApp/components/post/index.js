import React from 'react'

import {Wrapper,PostContent,ImageDiv,Actions,DeleteButton} from './style'


const Post = ({data}) => {

    const {username,image} = data.userData;

    return ( 
        <Wrapper>
            <PostContent>
                <h2>{username}</h2>
                <p>{data.text}</p>
                <Actions>
                    <button><i className="fas fa-thumbs-up"></i> {data.likes}</button>
                    <button><i className="fas fa-comments"></i> 4 coments</button>
                </Actions>
            </PostContent>
            <ImageDiv>
                <img src={`uploads/${image}`} alt="User"/>
            </ImageDiv>
            {/* <DeleteButton><i className="fas fa-plus"></i></DeleteButton> */}
        </Wrapper>
     );
}
 
export default Post;