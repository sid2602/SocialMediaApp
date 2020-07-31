import React , {useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import history from '../../history'

const MainApp = () => {


    

    useEffect(()=>{

        sessionVerify().then(json =>{
          if(!json.success){
            history.push('/signIn')
          }
        })
    
      },[])




    const logOut = () =>{
        
        const options = {credentials: 'include'};
        fetch('http://localhost:4000/api/logOut',options)
        .then(response => response.json())
        .then(json => {
            if(json.success){
               window.location.reload();
            }
        }
           
        ) 


    }
    
      const sessionVerify = async() => {
    
        const options = {credentials: 'include'}
    
        const response = await fetch('http://localhost:4000/api/',options);
        const json = await response.json();
    
        return json;
      }




    return(
        <>
            <p>HELLo</p>
            <button onClick ={logOut}>LogOut</button>
        </>
    )
}

export default MainApp;