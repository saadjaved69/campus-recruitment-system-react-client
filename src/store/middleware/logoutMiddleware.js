import LogoutAction from '../Actions/logoutAction'
import axios from 'axios'

class LogoutMiddleware {
    static logout(data){
        return (dispatch) => {

              console.log( 'my data' ,data)
            const token = localStorage.getItem('token')
              
            axios.post('http://localhost:8000/logout' , {headers : { Authorization : 'Bearer ' + token } })
            .then(res => {
                
               
               localStorage.removeItem('token')

               console.log('Response data' ,  res.data)
                
               
                dispatch(LogoutAction.Logout())
               

               
            }).catch(e => console.log(e.message))
        }
    }
}

             

export default LogoutMiddleware
    