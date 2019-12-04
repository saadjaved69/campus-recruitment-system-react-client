import StudentAction from '../Actions/studentAction'
import axios from 'axios'

class StudentMiddleware {
    static getData(data){
        return async (dispatch) => {

            dispatch(StudentAction.getData())
            const token = localStorage.getItem('token')  
            const payload = {headers: { Authorization: 'Bearer ' + token }}
           try {
                const response = await axios.post('http://localhost:8000/studentRegistration' , data , payload)
                dispatch(StudentAction.getDataSuccessfull({payload : response.data}))
                // console.log('Student Registration' ,  response.data)
                    

           }catch(error){
               console.error(error)
           }  
                
               
        }
    }
}

             

export default StudentMiddleware
    