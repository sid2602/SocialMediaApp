import action from '../actions/login.action'

const loginFetch = async(User) => {
    const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(User)
      });
    const json = await response.json();
    return json;
} 

const loginUser = User => async(dispatch) =>{

    dispatch(action.loading());
    
    try{
        const login = await loginFetch(User);
        if(login.success){
            // console.log(login.userData)
            dispatch(action.success());
            
        }
            
        else{
            dispatch(action.failure(login.error));
        }
            

    }catch(err){
        console.error(err.toString());
    }
    
}

export default loginUser