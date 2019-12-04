import { combineReducers } from 'redux'
import SignupReducer from './signupReducer'
import LoginReducer from './loginReducer'
import studentReducer from './studentReducer'
import companyReducer from './comReducer'

const rootReducer = combineReducers({
    signup : SignupReducer,
    login : LoginReducer,
    student : studentReducer,
    company: companyReducer
})



export default rootReducer