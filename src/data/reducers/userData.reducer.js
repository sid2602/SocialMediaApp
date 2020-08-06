
import constans from '../constans/userData.constans'


const initialState = {
    error: '',
    success: '',
    loading: false,
    data: {}
    
}

const UserData = (state = initialState,action) => {
    switch(action.type){
        case constans.GET_USER_DATA_SUCCESS:
            return{
                error: '',
                success: true,
                loading: false,
                data: action.data
            }

        case constans.GET_USER_DATA_LOADING:
            return{
                error: '',
                loading: true,
                success: '',
                ...state
            }
        
        case constans.GET_USER_DATA_FAILURE:
            return{
                error: action.error,
                loading: false,
                success: false,
                data:{}
            }
        
        
        default: return state
            
    }
}

export default UserData;