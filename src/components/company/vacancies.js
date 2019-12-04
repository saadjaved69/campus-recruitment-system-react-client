import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../navbar/navbar'


const ListJobs = ( { detail } ) => {
   const [disable , setDisable] = React.useState(false)
   const [apply , setApply] = React.useState("Apply")

   const onClick = () => {
       alert("you're successfully applied for this job" )
       setDisable(true)
       setApply('Applied')
   }

    return (
      <>
        <div className="card-body" style={{marginLeft: '400px'}}>
            <h6 className="card-subtitle mb-2 text-muted"> <b> SkILL: </b> { detail.skill }  </h6>
            <h6 className="card-subtitle mb-2 text-muted"> <b> MINIMUM CGPA:</b>  { detail.minimumCGPA } </h6>
            <h6 className="card-subtitle mb-2 text-muted"> <b> MINIMUM Salary :</b> { detail.minimumSalary }  </h6>
            <h6 className="card-subtitle mb-2 text-muted"> <b> DESCRIPTION :</b> { detail.description }  </h6>
            <button className="btn btn-primary " onClick={ () =>  onClick() } disabled={disable} > { apply} </button>
            <hr/>
        </div>
        
      </>  
     )
}

class Vacancies extends Component {
    state = { 
        jobs: []
     }
 
  async componentDidMount() {
        const token = localStorage.getItem('token')
        const payload = {headers : {Authorization: 'Bearer ' + token}}
        const Alljobs = await axios.get('http://localhost:8000/alljobsForStudent' , payload )
        // console.log("Response" , Alljobs.data )
        this.setState({ jobs: Alljobs.data })

    }

    render() { 
        return ( 
            <>
              <Navbar/>
              <h1 style={{marginLeft: '400px'}}>Companies Posted jobs </h1><hr/>
                { this.state.jobs.map( (job) => <ListJobs detail={job} key={job._id} />  )  }
            </>  
        );
    }
}
 
export default Vacancies;