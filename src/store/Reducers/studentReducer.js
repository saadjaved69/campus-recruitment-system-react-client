import StudentAction from '../Actions/studentAction'


const StudentReducer = (state = {
    
    name : '',
    age : '',
    education : '',
    marks : '',
    isLoading : false

} , action) => {
     switch (action.type) {

         case StudentAction.GET_STUDENT_DATA : 
         return {
             ...state ,
             isLoading : true
         }

         case StudentAction.GET_STUDENT_DATA_SUCCESSFULL : 
         return {
             ...state ,
             isLoading : true,
             name : action.data.name,
             age : action.data.age,
             education : action.data.education,
             marks : action.data.marks
         }
             
        default:
            return state 
     }


}

export default StudentReducer