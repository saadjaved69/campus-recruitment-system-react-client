class signupAction {

    static POST_SIGNUP = "POST_SIGNUP"
    static POST_SIGNUP_SUCCESSFULL = "POST_SIGNUP_SUCCESSFULL"
    static POST_SIGNUP_ERROR = "POST_SIGNUP_ERROR"

    static postSignup(){
       return {
           type : this.POST_SIGNUP
       } 
    } 

    static postSignupSuccessfull(data){
       return {
           type : this.POST_SIGNUP_SUCCESSFULL,
           data : { 
                    id : data.payload.profile._id,
                    name : data.payload.profile.name ,
                    email : data.payload.profile.email ,
                    roll : data.payload.profile.roll ,
                    token : data.payload.token 
                   
            }
         }
       

    }



    // static postSignupError(){

    // }

}



export default signupAction