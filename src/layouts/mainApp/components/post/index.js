import React from 'react'

import {Wrapper,PostContent,ImageDiv,Actions} from './style'


const Post = () => {
    return ( 
        <Wrapper>
            <PostContent>
                <h2>Paweł</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptate repellendus eveniet dolore numquam, nesciunt optio architecto quas veniam </p>
                <Actions>
                    <button><i className="fas fa-thumbs-up"></i> 5 Likes</button>
                    <button><i className="fas fa-comments"></i> 4 coments</button>
                </Actions>
            </PostContent>
            <ImageDiv>
                <img src="img/zdj.jpg" alt="Photo"/>
            </ImageDiv>
        </Wrapper>
     );
}
 
export default Post;