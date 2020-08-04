import React , {useEffect} from 'react';

import history from '../../history'

import Navigation from './components/navigation'

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
            <p>HELLo</p>
            
        </>
    )
}



export default MainApp;