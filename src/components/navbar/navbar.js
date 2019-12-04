import React, { Component } from 'react';
import {  Link  } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

class Navbar extends Component  {
  
  state = {
    roll: ''
  }

 //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
//  componentWillReceiveProps(nextProps) {
//     if(nextProps.login.isAuthenticated){
//        this.setState({roll : nextProps.login.roll})
//     }
//    else if(nextProps.signup.isAuthenticated){
//       this.setState({roll : nextProps.login.roll})
//    }
//  }

 async componentDidMount() {
    if(this.props.login.isAuthenticated){
      this.setState({roll : this.props.login.roll})
  }
    else if(this.props.signup.isAuthenticated){
      this.setState({roll : this.props.login.roll})
    }

    else {
      const token = localStorage.getItem('token')
      const payload = {headers : {Authorization: 'Bearer ' + token}}  
      const response = await axios.get('http://localhost:8000/account' , payload )  
      this.setState({ roll : response.data.roll }) 
    }




  }

  // async componentDidMount() {
  //  try{
  //    const token = localStorage.getItem('token')
  //    const payload = {headers : {Authorization: 'Bearer ' + token}}  
  //    const response = await axios.get('http://localhost:8000/account' , payload ) 
  //    console.log(response.data)
  //    const user = response.data
  //    this.setState({ roll : user.roll })

  //  }catch(error){
  //     console.error(error)
  //     // window.location.href = '/login'
  //  }
   
  // }


  render(){
  //  this.state.roll 
    return ( 
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link className="navbar-brand" to="/">CAMPUS RECRUIMENT SYSTEM</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                  {   this.state.roll === 'student' ? (
                   <> 
                    <Link to="/account" className="nav-item nav-link" >PROFILE</Link> 
                    <Link to="/company" className="nav-item nav-link" >COMPANIES</Link>
                    <Link to="/vacancies" className="nav-item nav-link" >VACANCIES </Link>
                    <Link to="/studentInfo" className="nav-item nav-link" >STUDENTREGISTER</Link>
                    <Link to="/logout" className="nav-item nav-link" >LOGOUT</Link>
                   </>

                  ) :    this.state.roll === 'company' ? (
                     <>  
                       <Link to="/account" className="nav-item nav-link" >PROFILE</Link>
                       <Link to="/student" className="nav-item nav-link" >STUDENT</Link>
                       <Link to="/companyRegister" className="nav-item nav-link">COMPANYREGISTER</Link>
                       <Link to="/postjob" className="nav-item nav-link">POSTJOB</Link>
                       <Link to="/logout" className="nav-item nav-link" >LOGOUT</Link>

                     </>


                  ) :    this.state.roll === 'admin' ? (
                  <>  
                    <Link to="/account" className="nav-item nav-link" >ACCOUNT</Link>
                    <Link to="/admin" className="nav-item nav-link" >USERS</Link>
                    <Link to="/company" className="nav-item nav-link" >COMPANIES</Link>
                    <Link to="/student" className="nav-item nav-link" >STUDENT</Link>
                    <Link to="/logout" className="nav-item nav-link" >LOGOUT</Link>

                  </>


                  ) : (
                    <>
                       <Link to="/login" className="nav-item nav-link" >LOGIN</Link>
                       <Link to="/signup" className="nav-item nav-link" >SIGNUP</Link>
                    </>
                  )}   
                     
                     {/* <Link to="/studentInfo" className="nav-item nav-link" >student-info</Link>
                     <Link to="/companyRegister" className="nav-item nav-link" >company-register</Link>
                     <Link to="/account" className="nav-item nav-link" >Account</Link>
                     <Link to="/logout" className="nav-item nav-link" >logout</Link>
                     */}
 

                </div>
              </div>
            </nav>

       
      
     );
  }
}


const mapStateToProps = (state) => {
  return{
      login: state.login,
      signup: state.signup,
  }
}


export default connect(mapStateToProps , null)(Navbar)