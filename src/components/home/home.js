import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../navbar/navbar'
import { connect } from 'react-redux';
import '../../App.css';


class Home extends Component {
    state = {  }
    
    
    
    
    render() { 
      console.log('redux' , this.props.auth)
        return ( 

      <div className="myDiv">
          <Navbar/>
        
        {/* <div style={{background: '#f4f4f4'}}>
          <h1 style={{margin:'280px', fontFamily: 'sans'}}>welcome to Campus Recruitment System</h1>
        </div> */}
          

      </div>       
             );
    }
}
 

const mapStateToProps = (state) => {
  return {
      auth: state.login
  }
}

export default connect( mapStateToProps , null )(Home) ;