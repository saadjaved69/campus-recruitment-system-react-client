import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { connect } from 'react-redux'
import Navbar from '../navbar/navbar'
import ListJob from '../postjob/listJob'

class Account extends Component {
  state = { 
    name: '',
    email : '',
    roll : '',
    company : '',
    Established : '',
    HR_Name : '',
    Email : '',
    StudentData: {},
    Alljobs: []
   }

  
 
 async componentDidMount() {
  

    
  //  if(!token){
  //    return window.location.href = '/login'
  //  }

   try{ 
     const token = localStorage.getItem('token')
     const payload = {headers : {Authorization: 'Bearer ' + token}}  
     const response = await axios.get('http://localhost:8000/account' , payload ) 
     const userCompany = await axios.get('http://localhost:8000/userCompany' , payload )
     const singleStudent = await axios.get('http://localhost:8000/singleStudent' , payload )
     const user = response.data
     const { CompanyName , Established , email , HR_Name } = userCompany.data
     const { name , age , education , marks } = singleStudent.data
     this.setState({name: user.name , email: user.email , roll : user.roll , company: CompanyName , Established , Email: email , HR_Name
      , StudentData: {
        Studentname : name,
        age,
        education,
        marks 
     }
    })
     console.log( 'Account state ' , this.state) 
   }catch(error){
    //  window.location.href = '/login'
    //  localStorage.removeItem('token')
    //  console.error(error)  
   }
  }




  render() { 
    const { name , email , roll , company , Established , HR_Name , Email } = this.state
    const { Studentname  , age , education , marks } = this.state.StudentData
  
    return (

         <>
            <Navbar/>
            <div className="card" style={{width: '50rem' , margin: '210px' , textAlign: 'center'}}>
              <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{roll}</h6>
              </div>

             { !(this.state.roll === 'admin' || this.state.roll === 'student' ) ? (
               <>
                 
                <hr/>
                <div className="card-body">
                    <h4 className="card-title">Currently login company details</h4>
                    <h6 className="card-subtitle mb-2 text-muted"> <b> CompanyName: </b> { company }</h6>
                    <h6 className="card-subtitle mb-2 text-muted"> <b>Established:</b>  {Established}</h6>
                    <h6 className="card-subtitle mb-2 text-muted"> <b>HR_Name:</b>  {HR_Name}</h6>
                    <h6 className="card-subtitle mb-2 text-muted"> <b>Email:</b> {Email}</h6>
                  </div>
               </> 

             ) : ("") }
             
             { (this.state.roll === 'student') ? (
               <>
                <hr/>
                <div className="card-body">
                    <h4 className="card-title">Currently Login Student Details</h4>
                    <h6 className="card-subtitle mb-2 text-muted"> <b> Studentname: </b> { Studentname }</h6>
                    <h6 className="card-subtitle mb-2 text-muted"> <b> Age:</b>  { age }</h6>
                    <h6 className="card-subtitle mb-2 text-muted"> <b> Education:</b>  { education }</h6>
                    <h6 className="card-subtitle mb-2 text-muted"> <b>Marks:</b> { marks }</h6>
                  </div>
               </> 

             ) : ("") }
               
             { (this.state.roll === 'company') ? <ListJob/> : '' }    
            </div>

         </>);
  }
}
 

const mapStateToProps = (state) => {
  return {
    auth: state.login
  }
}

export default connect(mapStateToProps , null)(Account)


