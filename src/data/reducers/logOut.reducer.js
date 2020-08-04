
import constans from '../constans/logOut.constans'


const initialState = {
    error: '',
    success: true,
    loading: false,
    
}

const LogOut = (state = initialState,action) => {
    switch(action.type){
        case constans.LOG_OUT_SUCCESS:
            return{
                error: '',
                success: true,
                loading: false,
               
            }

        case constans.LOG_OUT_LOADING:
            return{
                error: '',
                loading: true,
                success: '',
                
            }
        
        case constans.LOG_OUT_FAILURE:
            return{
                error: action.error,
                loading: false,
                success: false,
                
            }
        
        
        default: return state
            
    }
}

export default LogOut;