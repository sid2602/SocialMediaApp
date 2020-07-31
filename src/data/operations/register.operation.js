import action from '../actions/sign.action'

 const registerFetch = async User => {
    

    const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
       
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin':'http://localhost:4000'
        },
        body: JSON.stringify(User)
      });

      const json = await response.json();
      return json;
}

 const registerUser = User => async (dispatch) => {
    
    dispatch(action.loading());

    try{

        const register = await registerFetch(User);
        if(register.success)
            dispatch(action.success(''))
        else
            dispatch(action.failure(register.error))

    }catch(err){
        console.error(err.toString());
    }


}

export default registerUser;
     
