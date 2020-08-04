import React , {useEffect} from 'react';

import history from '../../history'

import Navigation from './components/navigation'
import Profile from './components/profile'

import {Container} from './style'

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
            </Container>
            
            
        </>
    )
}



export default MainApp;