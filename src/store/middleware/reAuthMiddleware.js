import reAuthAction from '../Actions/reAuthAction'
import axios from 'axios'


class reAuthMiddleware {

     static reAuth(){
        return async (dispatch) => {

            // dispatch(LoginAction.postLogin())
            //    console.log( 'my data' ,data)
         try{
             const token = localStorage.getItem('token')
             const payload = {headers : {Authorization: 'Bearer ' + token}}
             const response = await axios.get('http://localhost:8000/private' , payload )
               

                // localStorage.setItem('token' , response.data.token)
                // localStorage.setItem('user' , JSON.stringify(response.data.profile))
    
                // console.log('Response data sadaaaaaaaaaaasdaddad' ,  response.data)

                dispatch(reAuthAction.setUser({payload : response.data}))

                // window.location.href = '/account'
                        

         }catch(error){
             console.error("ERROR! :" , error)
         }

               
               
        }
    }
}

             

export default reAuthMiddleware
    