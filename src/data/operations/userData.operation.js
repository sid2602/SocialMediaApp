import action from '../actions/userData.action'
import history from '../../history'


const fetchUserData = async() => {
    
    const options = {credentials: 'include'}

    const response = await fetch('http://localhost:4000/api/',options);
    const json = await response.json();

    return json;
}

const userData = () => async(dispatch)=>{
    dispatch(action.loading());

    try{
        const response = await fetchUserData();
        if(response.success){
            dispatch(action.success(response.data))
        }else{
            dispatch(action.failure(response.error))
            history.push('/SignIn');
        }

    }catch(error){
        console.error(error);
    }
}

export default userData;