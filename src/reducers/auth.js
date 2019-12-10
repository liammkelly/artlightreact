import {
  AUTHENTICATION_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actionTypes"

const authReducer = (state = { didLoginFail: false, user: null }, action) => {
  console.info("AUTH Reducer", action.type, action)
  switch (action.type) {
    case AUTHENTICATION_FAILURE:
      return Object.assign({}, state, { didLoginFail: true })
    case LOGIN_FAILURE:
      return Object.assign({}, state, { user: null })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { didLoginFail: false, user: action.payload[0] })
    default:
      return state
  }
}

export default authReducer
