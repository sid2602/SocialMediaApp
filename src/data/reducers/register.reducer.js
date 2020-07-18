
import constans from '../constans/register.constans'


const initialState = {
    error: '',
    success: '',
    loading: false
}

const Register = (state = initialState,action) => {
    switch(action.type){
        case constans.REGISTER_SUCCESS:
            return{
                error: '',
                success: true,
                loading: false
            }

        case constans.REGISTER_LOADING:
            return{
                error: '',
                loading: true,
                success: ''
            }
        
        case constans.REGISTER_FAILURE:
            return{
                error: action.error,
                loading: false,
                success: false
            }
        default: return state
            
    }
}

export default Register;