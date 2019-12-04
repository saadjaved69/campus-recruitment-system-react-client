import signupAction from "../Actions/signupAction";



const SignupReducer = (state = {
    
    id : '',
    name : '',
    email : '',
    roll : '',
    token : '',
    isLoading : false,
    isAuthenticated : false,

} , action) => {
     switch (action.type) {
         case signupAction.POST_SIGNUP : 
         return {
             ...state ,
             isLoading : true
         }
         case signupAction.POST_SIGNUP_SUCCESSFULL : 
         return {
             ...state ,
             isLoading : false,
             isAuthenticated : true,
             id : action.data.id,
             name : action.data.name,
             email : action.data.email,
             roll : action.data.roll,
             token : action.data.token,
         }

        default:
            return state 
     }


}

export default SignupReducer