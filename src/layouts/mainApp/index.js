import React , {useEffect} from 'react';

import history from '../../history'

import Navigation from './components/navigation'
import Profile from './components/profile'
import AddPost from './components/addPost'
import Post from './components/post'

import {Container,PostsWrapper} from './style'

const MainApp = () => {


    

    useEffect(()=>{

        sessionVerify().then(json =>{
          if(!json.success){
            history.push('/SignIn')
          }
        })
    
      },[])


    
      const sessionVerify = async() => {
    
        const options = {credentials: 'include'}
    
        const response = await fetch('http://localhost:4000/api/',options);
        const json = await response.json();
    
        return json;
      }


    return(
        <>
            <Navigation/>
            <Container>
              <Profile/>
              <PostsWrapper>
                <AddPost/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                
              </PostsWrapper>
              
            </Container>
            
            
        </>
    )
}



export default MainApp;