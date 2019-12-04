import React, { Component } from 'react';
import '../../css/student.css'
import LoginMiddleware from '../../store/middleware/loginMiddleware'
import { connect } from 'react-redux'
import { Link  } from 'react-router-dom'
 
class Login extends Component {
    
    state = { 
        email : '',
        password : '',
       
     }


     //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
     componentWillReceiveProps(nextProps) {
         if(nextProps.auth.isAuthenticated){
             nextProps.history.push('/account')
         }
     }

     onChangeHandler = (e) => {
       this.setState({
         [e.target.name ] : e.target.value
       })
        
     }

  
     onSubmit = (e) => {
         e.preventDefault()

         const { email , password } = this.state
         
         const data = {
             email : email,
             password : password
         }

         this.props.Login(data)

      
    
    }

    render() { 
  console.log("auths" , this.props.auth)
        return (
            <div className="container">
            <br/><br/><br/>  
              <form onSubmit={this.onSubmit} className="student-form"> 
              <h3>Campus Login</h3> 
              <div className="form-group student-width">
                  <label>Email:</label>
                  <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="Email" />
              </div>
              <div className="form-group student-width">
                  <label>password:</label>
                  <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChangeHandler} placeholder="Password"/>
                  <p>don't have account?<Link to="/signup"> Signup</Link></p>
              </div>
              <div className="form-group student-width">
                    <input type="submit" value="Login" className="btn btn-primary" />
                </div>
           </form> 
        </div> 

       );

    }
}
 

const mapDispatchToProps = (dispatch) => {
   return {
       Login : (data) => dispatch(LoginMiddleware.login(data))
   }
}


const mapStateToProps = (state) => {
    return {
        auth : state.login
    }
 }
 

 


export default connect(mapStateToProps , mapDispatchToProps)(Login) ;