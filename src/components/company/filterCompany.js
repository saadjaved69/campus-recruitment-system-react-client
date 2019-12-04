import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';


const Companies = ({ company }) => {
    // console.log({company})
    return (
        <div>
        <div className="card" style={{width: '50rem'}}>
        <div className="card-body">
            <h5 className="card-title"></h5>
            <h6 className="card-subtitle mb-2 text-muted">Established:   </h6>
            <h6 className="card-subtitle mb-2 text-muted">HR_Name :  </h6>
            <h6 className="card-subtitle mb-2 text-muted">Email:   </h6>
        </div>
 </div>
 </div>
    )
}

class FilterCompany extends Component {
    
   state = { 
       jobs: [],
       userID : ''
     }
  
   async componentDidMount() {
            const token = localStorage.getItem('token')
            const payload = {headers : {Authorization: 'Bearer ' + token}} 
            const response = await axios.get('http://localhost:8000/account' , payload ) 
            const url = `http://localhost:8000/alljobsForStudent`
            const postedJob = await axios.get(url , payload)
            this.setState({ jobs: postedJob.data , userID: response.data._id })  
     }
    



    render() { 
        console.log('A' , this.props.auth )
        console.log("Response ID " , this.state.userID ) 

        return ( <>
      
            
        </> );
    }
}
 
const mapStateToProps = (state) => {
    return {
      auth: state.login
    }
  }
  
  export default connect(mapStateToProps , null)(FilterCompany)
  
  