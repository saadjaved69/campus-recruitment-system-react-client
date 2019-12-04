class reAuthAction {

    static POST_LOGIN = "POST_LOGIN"
    static POST_LOGIN_SUCCESSFULL = "POST_LOGIN_SUCCESSFULL"
    static POST_LOGIN_ERROR = "POST_LOGIN_ERROR"
    static SET_USER = "SET_USER"

    static postLogin(){
       return {
           type : this.POST_LOGIN
       } 
    } 

    static setUser(data){
       return {
           type : this.SET_USER,
           data : { 
                    id : data.payload.profile._id,
                    name : data.payload.profile.name ,
                    email : data.payload.profile.email ,
                    roll : data.payload.profile.roll ,
                   
            }
         }
       

    }

  

}



export default reAuthAction