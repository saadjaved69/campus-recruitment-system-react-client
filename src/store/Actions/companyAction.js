class CompanyAction {

    static POST = "POST"
    static POST_SUCCESSFULL = "POST_SUCCESSFULL"
    static POST_ERROR = "POST_LOGIN_ERROR"

    static post(){
       return {
           type : this.POST
       } 
    } 

    static postSuccessfull(data){
       return {
           type : this.POST_SUCCESSFULL,
           data : { 
                    id : data.payload._id,
                    CompanyName : data.payload.CompanyName ,
                    Established : data.payload.Established ,
                    HR_Name : data.payload.HR_Name ,
                    email : data.payload.email 
                   
            }
         }
       

    }

}



export default CompanyAction