
import constans from '../constans/sign.constans'


const initialState = {
    error: '',
    success: '',
    loading: false,
    
}

const Register = (state = initialState,action) => {
    switch(action.type){
        case constans.SIGN_SUCCESS:
            return{
                error: '',
                success: true,
                loading: false,
               
            }

        case constans.SIGN_LOADING:
            return{
                error: '',
                loading: true,
                success: '',
                
            }
        
        case constans.SIGN_FAILURE:
            return{
                error: action.error,
                loading: false,
                success: false,
                
            }
        
        
        default: return state
            
    }
}

export default Register;