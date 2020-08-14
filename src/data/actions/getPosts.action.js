import constans from '../constans/getPosts.constans'

const success = posts => ({type: constans.GET_POSTS_SUCCESS,posts});
const loading = () => ({type: constans.GET_POSTS_LOADING});
const failure = error => ({type: constans.GET_POSTS_FAILURE,error});
const reset = () => ({type: constans.RESET_POSTS});

export default{
    success,
    loading,
    failure,
    reset
}