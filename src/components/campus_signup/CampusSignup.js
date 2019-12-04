import React, { Component } from 'react';
import '../../css/student.css'
import {Link , Redirect} from 'react-router-dom'

import { connect } from 'react-redux'
import SignupMiddleware from '../../store/middleware/signupMiddleware'

class StudentSignup extends Component {
    
    state = { 
        name : '',
        email : '',
        password : '',
        roll : '',
     }
 

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated){
            nextProps.history.push('/account')
        }
    }
    

    // componentDidMount() {
    //     if(this.props.auth.isAuthenticated){
    //         this.props.history.push('/account')
    //     }     
    // }

     onChangeHandler = (e) => {
       const { name , value } = e.target

       this.setState({
          [ name ] : value
       })
        
     }

     onHandlerRadio = (e) => {
        const { name , value } = e.target
      
        this.setState({
            [name] : value
        }) 
     } 

     onSubmit = (e) => {
       e.preventDefault();

       const { name , email , password , roll } = this.state
         const studentData = {
              name,
              email,
              password,
              roll
         }
        console.log({studentData})
        
        this.props.post(studentData)
        
     
    }
    
    render() { 

     return ( 
      
       <div className="container">
            <br/><br/><br/>  
              <form onSubmit={this.onSubmit} className="student-form">
              <h3>Campus Signup</h3> 
              <div className="form-group student-width">
                 <label>Name:</label> 
                  <input type="text" className="form-control" name="name" onChange={this.onChangeHandler} value={this.state.name} placeholder="Name" />
              </div>
              <div className="form-group student-width">
                  <label>Email:</label>
                  <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="Email" />
              </div>
              <div className="form-group student-width">
                  <label>password:</label>
                  <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChangeHandler} placeholder="Password" />
              </div>

              <div className="form-group">
                    student 
                    <input type="radio" 
                    name="roll" 
                    value="student" 
                    checked={this.state.roll === 'student'} 
                    onChange={this.onHandlerRadio} />
                    
                    company  
                    <input type="radio" 
                    name="roll" 
                    value= "company" 
                    onChange={this.onHandlerRadio} 
                    checked={this.state.roll === "company"} />
                   
              </div>
              
              <div className="form-group student-width">
                  <input type="submit" value="Signup" className="btn btn-primary" />
              </div>
              <p>have an account?<Link to="/login"> Login</Link></p>
               
           </form> 
        </div> 
        );
    }
}
 



const mapDispatchToProps = (dispatch) => {
   return {
       post : (data) => dispatch(SignupMiddleware.post(data))
    } 
}

const mapStateToProps = (state) => {
    return {
        auth : state.signup
    }
 }
 
// export default StudentSignup
export default connect( mapStateToProps , mapDispatchToProps)(StudentSignup) ;