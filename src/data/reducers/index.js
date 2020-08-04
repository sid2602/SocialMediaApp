import {combineReducers} from 'redux'
import signReducer from './sign.reducer'
import logOutReducer from './logOut.reducer'
import constans from '../constans/logOut.constans'

const appReducer = combineReducers({
    signReducer,
    logOutReducer
})

const rootReducer = (state,action)=>{
    if(action.type === constans.LOG_OUT_SUCCESS){
        state = undefined;
    }

    return appReducer(state,action);
}

export default rootReducer;