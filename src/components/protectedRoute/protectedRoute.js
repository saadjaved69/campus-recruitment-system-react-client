import React from 'react';
import {  Route , Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'


function PrivateRoute({ component: Component  , ...rest }) {
  //  const [ auth , setAuth ] = React.useState(true)
   
  //  const user = JSON.parse(localStorage.getItem('user'))
  // const token = localStorage.getItem('token')
  // let decode = jwt_decode(token)
  // console.log('decode token' , Boolean(decode) )   
  
  const checkAuth = () => {
    const token = localStorage.getItem('token')
    if(!token){
      return false
    }  

    try {
      
     jwt_decode(token)
      
    }catch(e){
      localStorage.removeItem('token')

      return false
    }
    return true
  }
  
  return (
     <Route
       {...rest}
       render={() =>
        checkAuth() ?  (
            <Component />
         ) : (
           <Redirect
             to="/login"
           />
         )
       }
     />
    );
  }





export default PrivateRoute