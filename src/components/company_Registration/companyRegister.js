import React, { Component } from 'react';
import './css/student.css'
import CompanyMiddleware from '../../store/middleware/comMiddleware'
import { connect } from 'react-redux'
import axios from 'axios'
import Navbar from '../../components/navbar/navbar'

class PostJob extends Component {
    
    state = { 
        _id: '',
        company_name : '',
        Established : '',
        HR_Name : '',
        email : '',
        isSubmit: false
     }


     //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    //  componentWillReceiveProps(nextProps) {
    //     //  if( !(nextProps.user.roll === 'company') ){
    //     //      nextProps.history.push('/account')
    //     //  }
    //     //   if(nextProps.company.submit){
    //     //     nextProps.history.push('/account')
    //     //  }
         
    //  }

    async componentDidMount() {

        const token = localStorage.getItem('token')
        const payload = {headers : {Authorization: 'Bearer ' + token}}  
        const userCompany = await axios.get('http://localhost:8000/userCompany' , payload )
        
        console.log('userCom, ' , userCompany.data )  


        if(this.props.user.id === userCompany.data.user ){
           const { CompanyName , Established , HR_Name , email , _id } = userCompany.data

            this.setState({ isSubmit : true  , company_name: CompanyName , Established , HR_Name , email , _id })
        } 

       console.log('rexx ' , this.props.user) 
    }
      

     onChangeHandler = (e) => {
       this.setState({
         [e.target.name ] : e.target.value
       })
        
     }
     
     onSubmit = (e) => {
         e.preventDefault()
         console.log('submit , saad')


         const data = {
             CompanyName : this.state.company_name ,
             Established : this.state.Established ,
             HR_Name : this.state.HR_Name ,
             email : this.state.email ,
         }

         this.props.postCompany(data)
        
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

        const token = localStorage.getItem('token')
        const payload = {headers : {Authorization: 'Bearer ' + token}}  
        await axios.post('http://localhost:8000/updateCompany' , updateData , payload )
        // window.location.href = '/account'
        

     }


    render() { 
         const { company_name , Established , HR_Name , email } = this.state

        return ( 
         <>
            <Navbar/>
        <div>
            <div className="container">
                <form onSubmit={this.state.isSubmit ? this.updateSubmit : this.onSubmit} className="student-form">
                <h3>COMPANY REGISTRATION:</h3> 
                <div className="form-group student-width">
                    <label>Company Name:</label> 
                    <input name="company_name" type="text" className="form-control" value={ company_name } placeholder="Company Name" onChange={this.onChangeHandler} />
                </div>
                <div className="form-group student-width">
                    <label>Established:</label>
                    <input name="Established" type="text" className="form-control" value={ Established } placeholder="Established" onChange={this.onChangeHandler} />
                </div>
                <div className="form-group student-width">
                    <label>HR_Name:</label>
                    <input name="HR_Name" type="text" className="form-control" value={ HR_Name } placeholder="HR Name" onChange={this.onChangeHandler} />
                </div>
                <div className="form-group student-width">
                    <label>Email:</label>
                    <input name="email" type="text" className="form-control" value={ email } placeholder="Email" onChange={this.onChangeHandler} />
                </div>
                
                <div className="form-group student-width">
                    <input type="submit" value={this.state.isSubmit ? 'update' : 'submit'}  className={'btn btn-info' } />
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


export default connect(mapStateToProps , mapDispatchToProps)(PostJob) ;