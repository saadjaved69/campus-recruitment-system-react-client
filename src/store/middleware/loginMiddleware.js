import LoginAction from '../Actions/loginAction'
import axios from 'axios'


class LoginMiddleware {

    static login(data){
        return async (dispatch) => {

            dispatch(LoginAction.postLogin())
               console.log( 'my data' ,data)
         try{
             const response = await axios.post('http://localhost:8000/login' , data)
               

                localStorage.setItem('token' , response.data.token)
                // localStorage.setItem('user' , JSON.stringify(response.data.profile))
    
                console.log('Response data' ,  response.data)

                dispatch(LoginAction.postLoginSuccessfull({payload : response.data}))
                
                // window.location.href = '/account' 
                        

         }catch(error){
             console.error("ERROR! :" , error)
         }

               
               
        }
    }
}

             

export default LoginMiddleware
    