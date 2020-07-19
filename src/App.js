import React from 'react';



import {Switch,Route} from 'react-router-dom'

//layouts

import SignIn from './layouts/signIn';
import SignUp from './layouts/signUp'

function App() {



  return (
    <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/signUp" exact component={SignUp}/>
    </Switch>
  )

}

export default App;
