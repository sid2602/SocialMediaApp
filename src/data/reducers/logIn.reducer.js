
import constans from '../constans/login.constans'


const initialState = {
    error: '',
    success: '',
    loading: false,
    
}

const Login = (state = initialState,action) => {
    switch(action.type){
        case constans.LOGIN_SUCCESS:
            return{
                error: '',
                success: true,
                loading: false,
               
            }

        case constans.LOGIN_LOADING:
            return{
                error: '',
                loading: true,
                success: '',
                
            }
        
        case constans.LOGIN_FAILURE:
            return{
                error: action.error,
                loading: false,
                success: false,
                
            }
        
        
        default: return state
            
    }
}

export default Login;