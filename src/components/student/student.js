import React, { Component } from 'react';
import axios from 'axios'
// import Navbar from '../navbar/navbar'
import { connect } from 'react-redux';
// import { Card } from 'semantic-ui-react'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'

 
const StudentData = ({ name , age , _id , roll}) => {
    async function deleteStudent(){
        const url = `http://localhost:8000/delete?id=${_id}`
        const response = await axios.delete(url)
        window.location.href = '/student'
        console.log(response)
     }
   
   

    return (
      <>

        <div className="card" style={{width: '50rem' , margin: '40px' , marginLeft:'200px' }}>
            <div className="card-body">
                <h5 className="card-title">Name: {name} </h5>
                <h6 className="card-subtitle mb-2 text-muted"> Age: {age}</h6>
                {roll === 'admin' ? ( <><Link to={`/StudentDetail/${_id}`}>view</Link> | <Link to="" onClick={deleteStudent}>delete</Link></>  ) : (<Link to={`/StudentDetail/${_id}`}>view detail</Link>)}  
                
            </div>
        </div>
      </>  
    )
}


class Student extends Component {

    state = { 
        students : [],
        roll: ''
     }


   //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
   componentWillReceiveProps(nextProps) {
        if( !( nextProps.user.roll === 'company' || nextProps.user.roll === 'admin' )) {
            nextProps.history.push('/account')
        }
   }  
    
   async componentDidMount() {
       
 

     try{
            // const token = localStorage.getItem('token')
            // const payload = {headers : {Authorization: 'Bearer ' + token}}  
            // const account = await axios.get('http://localhost:8000/account' , payload ) 
            const response = await axios.get('http://localhost:8000/students' )
            this.setState({students: response.data  })

     }catch(error){
         console.log(error)
     }
    }



    render() { 
        console.log('mai mai' , this.props.user)
        return (
             <>  
            <Navbar/>

             { this.state.students.map(student =>  <StudentData  key={student._id} {...student} roll={this.props.user.roll} /> )}
              </>
       
         
         );
    }
   
}

const mapStateToProps = (state) => {
   return {
       user: state.login
   }
}
 
export default connect(mapStateToProps , null)(Student);