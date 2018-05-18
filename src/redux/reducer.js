
const initialState = {
  username: '',
  password: '',
  picture: '',
  id: ''
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const UPDATE_PROFILE = 'UPDATE_PROFILE'

export function updateUsername(username){
  return {
    type: UPDATE_USERNAME,
    payload: username
  }
}

export function updatePassword(password){
  return {
    type: UPDATE_PASSWORD,
    payload: password
  }
}

export function updateProfile(id, username, picture){
  return{
    type: UPDATE_PROFILE,
    payload: {
      id,
      username, 
      picture
    }
  }
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case UPDATE_USERNAME:
      return Object.assign({}, state, {username: action.payload})
    case UPDATE_PASSWORD:
      return Object.assign({}, state, {password: action.payload})
    case UPDATE_PROFILE:
      return Object.assign({}, state, {
        id: action.payload.id,
        username: action.payload.username,
        picture: action.payload.picture
      })
    default:
      return state
  }
}