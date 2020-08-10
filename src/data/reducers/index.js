import {combineReducers} from 'redux'
import registerReducer from './register.reducer'
import logOutReducer from './logOut.reducer'
import loginReducer from './logIn.reducer'
import userDataReducer from './userData.reducer'
import addNewPost from './addNewPost.reducer'
import constans from '../constans/logOut.constans'

const appReducer = combineReducers({
    registerReducer,
    loginReducer,
    logOutReducer,
    userDataReducer,
    addNewPost
})

const rootReducer = (state,action)=>{
    if(action.type === constans.LOG_OUT_SUCCESS){
        state = undefined;
    }

    return appReducer(state,action);
}

export default rootReducer;