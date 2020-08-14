import constans from '../constans/getPosts.constans'

const initialState = {
    error: '',
    success: '',
    loading: false,
    posts: []
    
}

const GetPosts = (state = initialState,action) => {
    switch(action.type){
        case constans.GET_POSTS_SUCCESS:
            return{
                error: '',
                success: true,
                loading: false,
                posts: state.posts.concat(action.posts)
            }

        case constans.GET_POSTS_LOADING:
            return{
                error: '',
                loading: true,
                success: '',
                posts: state.posts
            }

        case constans.RESET_POSTS:
            return initialState
        
        case constans.GET_POSTS_FAILURE:
            return{
                error: action.error,
                loading: false,
                success: false,
                posts: state.posts
            }
        
        
        default: return state
            
    }
}

export default GetPosts;