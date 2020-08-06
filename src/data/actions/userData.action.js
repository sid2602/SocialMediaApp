
import constans from '../constans/userData.constans'

const success = (data) => ({type: constans.GET_USER_DATA_SUCCESS,data});
const loading = () => ({type: constans.GET_USER_DATA_LOADING});
const failure = error => ({type: constans.GET_USER_DATA_FAILURE,error});


export default{
    success,
    loading,
    failure,
}