
import React, { Component } from 'react';
import axios from 'axios'
import decode from 'jwt-decode'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FilterCompany from './filterCompany'





class CompanyDetail extends Component {
    state = { 
        company: '',
        jobs: []
     }

    async componentDidMount() {
      try {
          const token = localStorage.getItem('token')
          const payload = {headers : {Authorization: 'Bearer ' + token}} 

          
          const url = `http://localhost:8000/CompanyDetail?id=${this.props.match.params.id}`
          const url2 = `http://localhost:8000/alljobsForStudent`
          const response = await axios.get(url)
          const postedJob = await axios.get(url2 , payload)
          this.setState({ company: response.data , jobs: postedJob.data })
          console.log( postedJob.data )

      }  catch(e){
          window.location.href = '/login'
          localStorage.removeItem('token')
      }

    }
    
    render() { 
       console.log('jobs' , this.state.jobs )
      const { CompanyName , Established , HR_Name , email  } = this.state.company 
      return ( <>
            <Navbar/>
                
                 <div style={{margin: '20px' , marginLeft: '210px'}}>
                 <Link to="/company"> <h1>  &#8592; </h1> </Link>

            <div>
                <div className="card" style={{width: '50rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{ CompanyName }</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Established: { Established }  </h6>
                    <h6 className="card-subtitle mb-2 text-muted">HR_Name : {HR_Name}  </h6>
                    <h6 className="card-subtitle mb-2 text-muted">Email: {email}  </h6>
                </div>
         </div>
        </div>
      </div> 
        <FilterCompany/>
          </> );
    }
}
 
const mapStateToProps = (state) => {
  return {
    auth: state.login
  }
}

export default connect(mapStateToProps , null)(CompanyDetail)


