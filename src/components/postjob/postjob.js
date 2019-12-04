import React, { Component } from 'react';
// import './css/student.css'
import CompanyMiddleware from '../../store/middleware/comMiddleware'
import { connect } from 'react-redux'
import axios from 'axios'
import Navbar from '../../components/navbar/navbar'

class CompanyRegister extends Component {
    
    state = { 
        _id: '',
        skill : '',
        minimumCGPA : '',
        minimumSalary : '',
        description : '',
        isSubmit: false
     }


     //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    //  componentWillReceiveProps(nextProps) {
    //      if( !(nextProps.user.roll === 'company') ){
    //          nextProps.history.push('/account')
    //      }
    //      else if(nextProps.company.submit){
    //         nextProps.history.push('/account')
    //      }
         
    //  }

    async componentDidMount() {

        // const token = localStorage.getItem('token')
        // const payload = {headers : {Authorization: 'Bearer ' + token}}  
        // const userCompany = await axios.get('http://localhost:8000/userCompany' , payload )
        
        // console.log('userCom, ' , userCompany.data )  


        // if(this.props.user.id === userCompany.data.user ){
        //    const { CompanyName , Established , HR_Name , email , _id } = userCompany.data

        //     this.setState({ isSubmit : true  , company_name: CompanyName , Established , HR_Name , email , _id })
        // } 

    //    console.log('rexx ' , this.props.user) 
    }
      

     onChangeHandler = (e) => {
       this.setState({
         [e.target.name ] : e.target.value
       })
        
     }
     
     onSubmit = async (e) => {
         e.preventDefault()
         console.log('submit , saad')

         const token = localStorage.getItem('token')
         const payload = {headers : {Authorization: 'Bearer ' + token}}  


         const data = {
            skill : this.state.skill ,
             minimumCGPA : this.state.minimumCGPA ,
             minimumSalary : this.state.minimumSalary ,
             description : this.state.description ,
         }

       const postjob = await axios.post('http://localhost:8000/postjob' , data , payload )
       console.log(postjob) 

       this.setState({
            skill : '',
            minimumCGPA : '',
            minimumSalary : '',
            description : ''
       })

     }
    
     updateSubmit = async (e) => {
         e.preventDefault()
         console.log('update , saad')

         const updateData = {
            CompanyName : this.state.company_name ,
            Established : this.state.Established ,
            HR_Name : this.state.HR_Name ,
            email : this.state.email ,
            _id : this.state._id 
        }

        // const token = localStorage.getItem('token')
        // const payload = {headers : {Authorization: 'Bearer ' + token}}  
        // await axios.post('http://localhost:8000/updateCompany' , updateData , payload )
        // window.location.href = '/account'
        

     }


    render() { 
         const { skill , minimumCGPA , minimumSalary , description } = this.state

        return ( 
         <>
            <Navbar/>
        <div>
            <div className="container">
                <form onSubmit={this.state.isSubmit ? this.updateSubmit : this.onSubmit} className="student-form">
                <h3>POST JOB</h3> 
                <div className="form-group student-width">
                    <label>skill:</label> 
                    <input name="skill" type="text" className="form-control" value={ skill } placeholder="skill" onChange={this.onChangeHandler} />
                </div>
                <div className="form-group student-width">
                    <label>minimumCGPA:</label>
                    <input name="minimumCGPA" type="text" className="form-control" value={ minimumCGPA } placeholder="minimumCGPA" onChange={this.onChangeHandler} />
                </div>
                <div className="form-group student-width">
                    <label>minimumSalary:</label>
                    <input name="minimumSalary" type="text" className="form-control" value={ minimumSalary } placeholder="minimumSalary" onChange={this.onChangeHandler} />
                </div>
                <div className="form-group student-width">
                    <label>description:</label>
                    <input name="description" type="text" className="form-control" value={ description } placeholder="description" onChange={this.onChangeHandler} />
                </div>
                
                <div className="form-group student-width">
                    <input type="submit" value={this.state.isSubmit ? 'UPDATE' : 'POST'}  className={'btn btn-info' } />
                </div>
                
            </form> 
            </div> 
        </div>     
         
         </>
        );
    }
}
 

const mapDispatchToProps = (dispatch) => {
    return{
        postCompany : (data) => dispatch( CompanyMiddleware.postCompany(data) )
    }
}


const mapStateToProps = (state) => {
    return{
        user: state.login,
        company: state.company,
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(CompanyRegister) ;