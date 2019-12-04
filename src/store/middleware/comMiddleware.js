import CompanyAction from '../Actions/companyAction'
import axios from 'axios'

class CompanyMiddleware {
    static postCompany(data){
        return async (dispatch) => {

            dispatch(CompanyAction.post())
            const token = localStorage.getItem('token')  
            const payload = {headers: { Authorization: 'Bearer ' + token }}
            try{

                const response = await axios.post('http://localhost:8000/companyRegister' , data , payload)
    
                console.log('Response data' ,  response)
                dispatch(CompanyAction.postSuccessfull({payload : response.data}))


             }catch(error){
                 console.error(error)
             }

               
               
        }
    }
}

             

export default CompanyMiddleware
  