import React, { Component } from 'react';
import axios from 'axios';

const ListJobs = ( { detail } ) => {
    return (
      <>
        
        
        <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted"> <b> SKILL: </b> { detail.skill }  </h6>
            <h6 className="card-subtitle mb-2 text-muted"> <b> MINIMUM CGPA:</b>  { detail.minimumCGPA } </h6>
            <h6 className="card-subtitle mb-2 text-muted"> <b> MINIMUM Salary:</b> { detail.minimumSalary }  </h6>
        </div>
        
      </>  
     )
}

class ListJob extends Component {
    state = { 
        jobs: []
     }
 
  async componentDidMount() {
        const token = localStorage.getItem('token')
        const payload = {headers : {Authorization: 'Bearer ' + token}}
        const Alljobs = await axios.get('http://localhost:8000/alljobs' , payload )
        console.log("Response" , Alljobs.data )
        this.setState({ jobs: Alljobs.data.postJob })

    }

    render() { 
        return ( 
            <><hr/> <h1>Posted Jobs</h1><hr/>
                { this.state.jobs.map( (job) => <ListJobs detail={job} key={job._id} />  )  }
            </>  
        );
    }
}
 
export default ListJob;