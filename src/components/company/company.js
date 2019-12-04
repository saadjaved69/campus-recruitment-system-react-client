import React, { Component } from 'react';
import Navbar from '../navbar/navbar'
import axios from 'axios';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

const ListCompany = ({ Company , roll }) => {
 
   async function deleteCompany(){
     const url = `http://localhost:8000/CompanyDelete?id=${Company._id}`
     const response = await axios.delete(url)
   //   window.location.href = '/company'
     console.log(response)
  }
  
   return (
   <>
  
   <div style={{margin: '20px' , marginLeft: '210px'}}>
     <div>
         <div className="card" style={{width: '50rem'}}>
            <div className="card-body">
               <h5 className="card-title">{ Company.CompanyName }</h5>
               
               {roll === 'admin' ? (<> <Link to={`/CompanyDetail/${Company._id}`}>View</Link> | <Link onClick={() => deleteCompany()} to=''>delete</Link></> ) : (<Link to={`/CompanyDetail/${Company._id}`}>View Detail</Link>)} 
         </div>
      </div>
     </div>
   </div> 

      
   </>  );
}

class Company extends Component {
     state = {
        companies: [],
        roll: ''
     }  
  
   
   deleteCompany = async () => {
      const url = `http://localhost:8000/CompanyDelete?id=${Company._id}`
      const response = await axios.delete(url)
    //   window.location.href = '/company'
      console.log(response)
   } 



   //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
   componentWillReceiveProps(nextProps) {
      if(!( nextProps.user.roll === 'student' || nextProps.user.roll === 'admin' )){
         nextProps.history.push('/')   
     }
   }  

   async componentDidMount() {
      
      try {
        const token = localStorage.getItem('token')
        const payload = {headers : {Authorization: 'Bearer ' + token}}  
        const account = await axios.get('http://localhost:8000/account' , payload ) 
        const response = await axios.get('http://localhost:8000/companyData')
        const userCompany = await axios.get('http://localhost:8000/userCompany' , payload)
        console.log({userCompany})
        this.setState({companies: response.data , roll: account.data.roll})
        


     } catch(e){
       
     }
      
   }

   
    
    render() { 
      
        return (
            <div> 
          <Navbar/>
               <br/>
               <h1 style={{marginLeft: '30%'}}>Registered Companies </h1>
               {this.state.companies.map(company => <ListCompany Company={company} key={company._id} roll={this.state.roll} /> )}
            </div> 
       );
    }
}

const mapStateToProps = (state) => {
   return {
       user: state.login
   }
}
 
export default connect(mapStateToProps , null)(Company);