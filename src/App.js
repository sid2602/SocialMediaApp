import React,{useEffect} from 'react';



import {Switch,Route} from 'react-router-dom'
import history from './history'


//layouts

import SignIn from './layouts/signIn';
import SignUp from './layouts/signUp'
import MainApp from './layouts/mainApp'



function App() {

  useEffect(()=>{
      const options = {credentials: 'include'}
      fetch('/api/logged',options)
      .then(res=>res.json())
      .then(json=>json.success? history.push('/'):null)

  },[])
 


  return (
    <Switch>
        
        <Route path="/SignIn" exact component={SignIn}/>
        <Route path="/SignUp" exact component={SignUp}/>
        <Route path="/" exact component={MainApp}/>
    </Switch>
  )

}

export default App;
