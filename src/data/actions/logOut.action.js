
import constans from '../constans/logOut.constans'

const success = () => ({type: constans.LOG_OUT_SUCCESS});
const loading = () => ({type: constans.LOG_OUT_LOADING});
const failure = error => ({type: constans.LOG_OUT_FAILURE,error});

export default{
    success,
    loading,
    failure
}