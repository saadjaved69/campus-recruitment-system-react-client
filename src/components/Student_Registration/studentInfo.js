import React, { Component } from 'react';
import '../../css/student.css'
import StudentMiddleware from '../../store/middleware/studentMiddleware'
import { connect } from 'react-redux'
import axios from 'axios'
import Navabar from '../navbar/navbar'
import { Redirect } from 'react-router-dom'

class Studentinfo extends Component {
    
    state = { 
        _id: '',
        name : '',
        age : '',
        education : '',
        marks : '',
        isSubmit: false,
        updated: true

     }

    async
    
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if( !(nextProps.user.roll === 'student') ){
           nextProps.history.push('/account')
    }        
    
  }


   async componentDidMount() {
      
        const token = localStorage.getItem('token')
        const payload = {headers : {Authorization: 'Bearer ' + token}}  
        const singleStudent = await axios.get('http://localhost:8000/singleStudent' , payload )
        
        console.log('single student ' , singleStudent.data )  


        if(this.props.user.id === singleStudent.data.user ){
           const { name , age , education , marks , _id } = singleStudent.data

            this.setState({ isSubmit : true  , name , age , education , marks , _id })
        } 

        
       console.log('rexx ' , this.props.user)  
     }


     onChangeHandler = (event) => {
       const { name , value } = event.target

       this.setState({
           [name] : value
        })
        
     }
     
     onSubmit = (e) => {
         e.preventDefault()
          
         const data = {
             name: this.state.name ,
             age: this.state.age ,
             education: this.state.education ,
             marks : this.state.marks
         }

         console.log(data)

         this.props.getData(data)

    //    window.location.href = '/company' 
     }
     
     updateSubmit = async (e) => {
        e.preventDefault()
        
        
        const updateData = {
            _id : this.state._id,
            name: this.state.name ,
            age : this.state.age ,
            education : this.state.education ,
            marks : this.state.marks 
        }
        
        const token = localStorage.getItem('token')
        const payload = {headers : {Authorization: 'Bearer ' + token}}  
        await axios.post('http://localhost:8000/updateStudent' , updateData , payload )
        
  

       

    }
    
    render() { 
        const { name , age , education , marks  } = this.state

        return ( 

       <div>
         <Navabar/>  
        <br/><br/>
        <div className="container">
              <form onSubmit={this.state.isSubmit ? this.updateSubmit : this.onSubmit} className="student-form">
              <h3>Student registration</h3> 
                <div className="form-group student-width">
                    <label>Name:</label> 
                    <input name="name" type="text" value={name} className="form-control" placeholder="Name" onChange={this.onChangeHandler} />
                </div>
                <div className="form-group student-width">
                    <label>Age:</label>
                    <input name="age" type="text" value={age} className="form-control" placeholder="Age"  onChange={this.onChangeHandler} />
                </div>
                <div className="form-group student-width">
                    <label>Education:</label>
                    <input name="education" type="text" value={education} className="form-control" placeholder="Education" onChange={this.onChangeHandler} />
                </div>
                <div className="form-group student-width">
                    <label>Marks:</label>
                    <input name="marks" type="text" value={marks} className="form-control" placeholder="Marks" onChange={this.onChangeHandler} />
                </div>
                
                <div className="form-group student-width">
                    <input type="submit" value={ this.state.isSubmit ? "update" : "submit" } className="btn btn-primary" />
                </div>
           </form> 
        </div> 
       </div>     
        );
    }
}
 

const mapDispatchToProps = (dispatch) => {
    return{
        getData : (data) => dispatch(StudentMiddleware.getData(data))
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.login
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(Studentinfo) ;