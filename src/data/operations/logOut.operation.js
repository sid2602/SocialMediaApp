import action from '../actions/logOut.action';
import history from '../../history'

const logOutFetch = async() =>{
    const options = {credentials: 'include'};
    const response = await fetch('http://localhost:4000/api/logOut',options);
    const json = response.json();
    return json;
}

const logOutUser = () => async(dispatch) =>{
    dispatch(action.loading());
    try{
        const logOut = await logOutFetch();
        if(logOut.success){
            dispatch(action.success());
            history.push('/SignIn')
           
        }
            
        else dispatch(action.failure(logOut.error))
        
    }catch(error){
        dispatch(action.failure(error.toString()));
    }
}


export default logOutUser;