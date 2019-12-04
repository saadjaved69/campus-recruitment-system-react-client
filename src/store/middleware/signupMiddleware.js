import signupAction from '../Actions/signupAction'
import axios from 'axios'
import { async } from 'q'

class SignupMiddleware {
    static post(data){
        return async (dispatch) => {

              console.log( 'my data' ,data)
              dispatch(signupAction.postSignup())
              
               const response = await axios.post('http://localhost:8000/signup' , data)
            
                                
                            console.log('Response data' ,  response.data)

                            localStorage.setItem('token' , response.data.token)

                            dispatch(signupAction.postSignupSuccessfull({payload : response.data}))
               
        }
    }
}

             

export default SignupMiddleware
    