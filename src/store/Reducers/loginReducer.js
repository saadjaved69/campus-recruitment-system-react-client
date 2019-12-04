import reAuthAction from "../Actions/reAuthAction";
import LoginAction from "../Actions/loginAction";




const LoginReducer = (state = {
    
    id : '',
    name : '',
    email : '',
    roll : '',
    isLoading : false,
    isAuthenticated : false,
    user: ''

} , action) => {
     switch (action.type) {
         case LoginAction.POST_LOGIN : 
         return {
             ...state ,
             isLoading : true
         }
         case LoginAction.POST_LOGIN_SUCCESSFULL : 
         return {
             ...state ,
             isLoading : false,
             isAuthenticated : true,
             id : action.data.id,
             name : action.data.name,
             email : action.data.email,
             roll : action.data.roll,
         }

         case reAuthAction.SET_USER : 
         return {
             ...state ,
             isLoading : false,
             isAuthenticated : true,
             id : action.data.id,
             name : action.data.name,
             email : action.data.email,
             roll : action.data.roll,
         }

       

        default:
            return state 
     }
}



export default LoginReducer