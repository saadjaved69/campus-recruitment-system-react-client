class LogoutAction {

    static LOG_OUT = "LOG_OUT"
    static LOG_OUT_SUCCESSFULL = "LOG_OUT_SUCCESSFULL"
     

    static logout(){
       return {
           type : this.LOG_OUT
       } 
    } 

    static logoutSuccessfull(data){
        return {
            type : this.LOG_OUT_SUCCESSFULL,
            data : {
                id : data.payload.profile._id,
                name : data.payload.profile.name ,
                email : data.payload.profile.email ,
            } 
        }
    }

}



export default LogoutAction