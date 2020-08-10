import constans from '../constans/addNewPost.constans'

const success = () => ({type: constans.ADD_NEW_POST_SUCCESS});
const loading = () => ({type: constans.ADD_NEW_POST_LOADING});
const failure = error => ({type: constans.ADD_NEW_POST_FAILURE,error});


export default{
    success,
    loading,
    failure,
    
}