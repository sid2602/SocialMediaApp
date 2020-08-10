import constans from '../constans/addNewPost.constans'

const initialState = {
    error: '',
    success: '',
    loading: false,
    
}

const AddNewPost = (state = initialState,action) => {
    switch(action.type){
        case constans.ADD_NEW_POST_SUCCESS:
            return{
                error: '',
                success: true,
                loading: false,
               
            }

        case constans.ADD_NEW_POST_LOADING:
            return{
                error: '',
                loading: true,
                success: '',
                
            }
        
        case constans.ADD_NEW_POST_FAILURE:
            return{
                error: action.error,
                loading: false,
                success: false,
                
            }
        
        
        default: return state
            
    }
}

export default AddNewPost;