import React from 'react';


const Logout = (props) => {
    localStorage.removeItem('token')
        // window.location.href = "/login"
        props.history.push('/login')
    return (
         <h1>logging out</h1>     
    )    
    

}
 
export default Logout;