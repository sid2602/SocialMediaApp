
import constans from '../constans/register.constans'

const success = () => ({type: constans.REGISTER_SUCCES});
const loading = () => ({type: constans.REGISTER_LOADING});
const failure = error => ({type: constans.REGISTER_FAILURE,error});

export default{
    success,
    loading,
    failure
}