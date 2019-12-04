import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'

class StudentDetail extends Component {
    state = { 
        student: ''
     }
    
    

    async componentDidMount() {

    

        const url = `http://localhost:8000/StudentDetail?id=${this.props.match.params.id}`
        const response = await axios.get(url)
        this.setState({ student: response.data })

    }
    
    render() { 
      const {name , age , education , marks  } = this.state.student 
      return ( <>
            <Navbar/>

                 <div style={{margin: '20px' , marginLeft: '210px'}}>
                 <Link to="/student"> <h1>  &#8592; </h1> </Link>

            <div>
                <div className="card" style={{width: '50rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Name: { name }</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Age: { age } </h6>
                    <h6 className="card-subtitle mb-2 text-muted">Education { education } </h6>
                    <h6 className="card-subtitle mb-2 text-muted">Marks: { marks } </h6>
                </div>
         </div>
        </div>
      </div> 
          </> );
    }
}
 
const mapStateToProps = (state) => {
    return {
        user: state.login
    }
 }
  
 export default connect(mapStateToProps , null)(StudentDetail);