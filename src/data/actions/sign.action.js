
import constans from '../constans/sign.constans'

const success = () => ({type: constans.SIGN_SUCCESS});
const loading = () => ({type: constans.SIGN_LOADING});
const failure = error => ({type: constans.SIGN_FAILURE,error});


export default{
    success,
    loading,
    failure,
    
}