import {
  AUTHENTICATION_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  SET_LOCAL_USER,
  VALIDATE_USERNAME_FAILURE,
  VALIDATE_USERNAME_SUCCESS
} from "../actionTypes"

const initState = {
  didLoginFail: false,
  didRegisterFail: false,
  isUsernameInvalid: null,
  user: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTHENTICATION_FAILURE:
    case LOGIN_FAILURE:
      return Object.assign({}, state, { didLoginFail: true, user: null })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { didLoginFail: false, user: action.payload })
    case REGISTER_USER_FAILURE:
      return Object.assign({}, state, { didRegisterFail: true })
    case REGISTER_USER_SUCCESS:
      return Object.assign({}, state, { didRegisterFail: false, user: action.payload })
    case SET_LOCAL_USER:
      return Object.assign({}, state, { user: action.payload })
    case VALIDATE_USERNAME_FAILURE:
      return Object.assign({}, state, { isUsernameInvalid: true })
    case VALIDATE_USERNAME_SUCCESS:
      return Object.assign({}, state, { isUsernameInvalid: !action.payload })
    default:
      return state
  }
}

export default authReducer
