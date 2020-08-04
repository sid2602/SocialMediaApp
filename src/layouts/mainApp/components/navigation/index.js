import React from 'react';
import {connect} from 'react-redux'
import logOutUser from '../../../../data/operations/logOut.operation'

import {Header} from './style'

const Navigation = ({logOutUser}) =>{


    const logOut = () => logOutUser();

    return(
        <Header>
            <nav>
                <ul>
                    <li><i className="fas fa-plus"></i></li>
                    <li><i className="fas fa-home"></i></li>
                    <li onClick={logOut}><i className="fas fa-sign-out-alt"></i></li>
                </ul>
            </nav>
        </Header>
    )
}

const mapDispatchToProps =(dispatch)=>({
    logOutUser: ()=>dispatch(logOutUser())
  })
  
const ConnectedApp = connect(null,mapDispatchToProps)(Navigation);

export default ConnectedApp