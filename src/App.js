import CampusSignup from './components/campus_signup/CampusSignup'
import Login from './components/login/login'
import Home from './components/home/home'
import Company from './components/company/company'
import Student from './components/student/student'
import StudentInfo from './components/Student_Registration/studentInfo'
import Logout from './components/logout/logout'
import Account from './components/account/account'
import companyRegister from './components/company_Registration/companyRegister'
import Admin from './components/admin/admin'
import StudentDetail from './components/studentDetail/studentDetail'
import CompanyDetail from './components/company/companyDetail'
import Vacancies from './components/company/vacancies'
import Postjob from './components/postjob/postjob'
import Navbar from './components/navbar/navbar'
import ProtectedRoute from './components/protectedRoute/protectedRoute'
import { BrowserRouter as Router , Route , Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import reAuthMiddleware from './store/middleware/reAuthMiddleware';




class App extends Component  {
 
  // state = {
  //   user: '',
  //   isAuth: false
  // }

//  componentDidMount() {
//   //  console.log('ze' , this.props)
//    this.props.reAuth()
//  }
 
  render(){
    // console.log('saad bhai' , this.state.user)
    // console.log('ze' , this.props.auth)
   
   return (
     <div>
        <Router>
            {/* <Navbar/> */}
            <Route exact path="/" component={Home}/>
            
            <Route path="/signup" component={CampusSignup}/>
            
            <Route path="/login" component={Login}/>
      
            <ProtectedRoute path="/company" component={Company}/>
            
            <ProtectedRoute path="/student" component={Student}/>

            <ProtectedRoute path="/studentInfo" component={StudentInfo}/>
  
            <Route path="/logout" component={Logout}/>
  
            <ProtectedRoute path="/account"  component={Account}/>
  
            <ProtectedRoute path="/companyRegister" component={companyRegister}/>

            <Route path="/StudentDetail/:id" component={StudentDetail}/>

            <Route path="/CompanyDetail/:id" component={CompanyDetail}/>

            <Route path="/postjob" component={ Postjob }/>

            <Route path="/vacancies" component={ Vacancies }/>
  
            <ProtectedRoute path="/admin" component={Admin}/>
            
        </Router>
     </div>
   );

 } 
}
          
const mapDispatchToProps = (dispatch) => {
  return {
    reAuth : () => dispatch(reAuthMiddleware.reAuth())
  }
}

// const mapStateToProps = (state) => {
//   return {
//     auth :  state.login
//   }
// }

export default connect( null , mapDispatchToProps)(App);
