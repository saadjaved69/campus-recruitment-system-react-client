import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect } from 'react-redux'
import Navbar from '../navbar/navbar'
 

const Detail = props => (
  <tr>
    <td>{props.user.roll}</td>
    <td>{props.user.name}</td>
    <td>{props.user.email}</td>
    <td>
      { !(props.user.roll === "admin") ? (
        <Link to="#" onClick={() => { props.deleteUser(props.user._id) }}>Delete-User</Link>
      ) : ("") }
    </td>
  </tr>
)

class Admin extends Component {
  

    state = {users : []};
  

 //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
 componentWillReceiveProps(nextProps) {
  if(!(nextProps.user.roll === 'admin')){
    nextProps.history.push('/')
 }  

 }   

 async componentDidMount () {
   
   try{
     
     const response = await axios.get('http://localhost:8000/users')
     console.log(response.data)
     this.setState({ users: response.data })
     
     
    }catch(error){
      console.error(error)
    }
      
}



  deleteUser = async (id) => {
     await axios.delete('http://localhost:8000/delete-user/'+id)

    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }

  userList = () => {
    return this.state.users.map(currentUser => {
      return <Detail user={currentUser} deleteUser={this.deleteUser} key={currentUser._id}/>;
    })
  }

  

  render() {

   

    return (
        <>
          <Navbar/>
          <div className="container">
            <h3>Admin</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Roll</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete User</th>
                
                </tr>
              </thead>
              <tbody>
                { this.userList() }
              </tbody>
            </table>
          </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.login
  }
}

export default connect(mapStateToProps , null)(Admin);