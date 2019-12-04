class StudentAction {

    static GET_STUDENT_DATA = "GET_STUDENT_DATA"
    static GET_STUDENT_DATA_SUCCESSFULL = "GET_STUDENT_DATA_SUCCESSFULL"
    static GET_STUDENT_DATA_ERROR = "GET_STUDENT_DATA_ERROR"

    static getData(){
       return {
           type : this.GET_STUDENT_DATA
       } 
    } 

    static getDataSuccessfull(data){
       return {
           type : this.GET_STUDENT_DATA_SUCCESSFULL ,
           data : { 
                    name : data.payload.name ,   
                    age : data.payload.age ,
                    education : data.payload.education ,
                    marks : data.payload.marks 
                    
                   
            }
         }
       

    }



    // static postSignupError(){

    // }

}



export default StudentAction