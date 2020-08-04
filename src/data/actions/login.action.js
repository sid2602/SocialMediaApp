
import constans from '../constans/login.constans'

const success = () => ({type: constans.LOGIN_SUCCESS});
const loading = () => ({type: constans.LOGIN_LOADING});
const failure = error => ({type: constans.LOGIN_FAILURE,error});


export default{
    success,
    loading,
    failure,
    
}