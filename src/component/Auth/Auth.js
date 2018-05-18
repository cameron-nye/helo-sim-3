import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateProfile} from '../../redux/reducer'
// import {updateUsername, updatePassword} from '../../redux/reducer'


class Auth extends Component{
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',

    }
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  handleUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }
  // REDUX WAY

  // registerUser(){
  //   const {username, password} = this.props
  //   axios.post('/api/register', {username, password})
  //     .then(res => {
  //       window.location = '/dashboard'
  //       alert(`New User Created: ${username}`)
  //     })
  // }

  // loginUser(){
  //   const {username, password} = this.props
  //   axios.post('/api/login', {username, password})
  //     .then(res => {
  //       window.location = '/dashboard'
  //       alert(`Welcome ${username}`)
  //     })
  // }

  registerUser(){
    const {username, password} = this.state
    axios.post('/api/register', {username, password})
      .then(res => {
        window.location = '/dashboard'
        alert(`New User Created: ${username}`)
        this.props.updateProfile(res.data)
      })
  }

  loginUser(){
    const {username, password} = this.state
    axios.post('/api/login', {username, password})
      .then(res => {
        console.log(res.data)
        window.location = '/#/dashboard'
        alert(`Welcome ${res.data.username}`)
        this.props.updateProfile(res.data.id, res.data.username, res.data.picture)
      })
  }


  render(){
    return(
      <div>
        Auth
        <input type="text"
                placeholder='Username'
                onChange={this.handleUsername}/>
        <input type="password" name="password"
                placeholder='Password'
                onChange={this.handlePassword}
                />
        <button onClick={() => this.loginUser()}>Login</button>
        <button onClick={() => this.registerUser()}>Register</button>
      </div>
    )
  }
}

// function mapStateToProps(state){
//   return{
//     username: state.username,
//     password: state.password
//   }
// }

// 

export default connect(null, {updateProfile})(Auth)