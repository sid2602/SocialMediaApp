import React from 'react';

import {CreatePost,ShareButton,Wrapper} from './style'

const AddPost = () => {
    return ( 
        <Wrapper>
            <CreatePost>
                <label htmlFor="newPost">Create new post</label>
                <textarea id="newPost" name="newPost" rows="4" cols="50" placeholder="How are You?"/>
                <ShareButton>Share</ShareButton>
            </CreatePost>
            
        </Wrapper>
     );
}
 
export default AddPost;