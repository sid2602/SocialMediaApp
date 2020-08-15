import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import logOutUser from '../../../../data/operations/logOut.operation'

import {Header} from './style'

const Navigation = ({logOutUser,setOpenAddPostModal}) =>{

    const logOut = () => logOutUser();

    const handleAddPostClick = () =>{

        // console.log(document.querySelector(".addPost").offsetTop);
        window.scrollTo(0,document.querySelector(".addPost").offsetTop - 100);
        setOpenAddPostModal(true);
    }
    const handleHomeClick = () => window.scrollTo(0,0);
    

    return(
        <Header >
            <nav>
                <ul>
                    <li><button onClick={handleAddPostClick} ><i className="fas fa-plus"></i></button></li>
                    <li><button onClick={handleHomeClick}><i className="fas fa-home"></i></button></li>
                    <li><button onClick={logOut}><i className="fas fa-sign-out-alt"></i></button></li>
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