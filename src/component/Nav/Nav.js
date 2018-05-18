import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Nav(props){
  return(
    <div>
      Nav
      <Link to='/dashboard'><button>Home</button></Link>
      <Link to='/new'><button>New Post</button></Link>
      <Link to='/'><button>Logout</button></Link>
      <div className="username">
      Username: {props.username}
      <img src={props.picture} alt=""/>
      
      </div>
     
    </div>
  )
}

function mapStateToProps(state){
  return{
    username: state.username,
    picture: state.picture
  }
}


export default connect(mapStateToProps)(Nav)