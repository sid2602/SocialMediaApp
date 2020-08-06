import React , {useEffect} from 'react';

import history from '../../history'

import Navigation from './components/navigation'
import Profile from './components/profile'
import AddPost from './components/addPost'
import Post from './components/post'

import {Container,PostsWrapper} from './style'

import {connect} from 'react-redux';
import userData from '../../data/operations/userData.operation'

const MainApp = ({userData}) => {


    

    useEffect(()=>{

        userData();
    
      },[])


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

const mapDispatchToProps = dispatch =>({
  userData: ()=>dispatch(userData())
})


const ConectedApp = connect(null,mapDispatchToProps)(MainApp);

export default ConectedApp;