import {
  API,
  AUTHENTICATION_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  SAVE_USER_START,
  SAVE_USER_FAILURE,
  SAVE_USER_SUCCESS,
  VALIDATE_USERNAME_START,
  VALIDATE_USERNAME_SUCCESS,
  SET_LOCAL_USER
} from "../actionTypes"

export const registerUser = data => {
  return apiAction({
    url: "/user",
    method: "POST",
    data: formatFormData(data),
    onSuccess: result => {
      localStorage.setItem("tals-user", JSON.stringify(result))
      return registerUserSuccess(result)
    },
    onFailure: registerUserFailure,
    label: REGISTER_USER_START
  })
}

export const saveUser = data => {
  return apiAction({
    url: "/user",
    method: "PUT",
    data: formatFormData(data),
    onSuccess: result => {
      localStorage.setItem("tals-user", JSON.stringify(result))
      return saveUserSuccess(result)
    },
    onFailure: saveUserFailure,
    label: SAVE_USER_START
  })
}

export const validateUsername = data => {
  return apiAction({
    url: "/validate_username",
    method: "POST",
    data: data,
    onSuccess: validateUsernameSuccess,
    onFailure: validateUsernameFailure,
    label: VALIDATE_USERNAME_START
  })
}

export const loginUser = data => {
  return apiAction({
    url: "/login",
    method: "POST",
    data: formatFormData(data),
    onSuccess: result => {
      localStorage.setItem("tals-user", JSON.stringify(result))
      return loginSuccess(result)
    },
    onFailure: loginFailure,
    label: LOGIN_START
  })
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  }
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}

export function loginFailure(payload) {
  return {
    type: LOGIN_FAILURE,
    payload
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  }
}

export function registerUserSuccess(payload) {
  return {
    type: REGISTER_USER_SUCCESS,
    payload
  }
}

export function registerUserFailure(payload) {
  return {
    type: REGISTER_USER_FAILURE,
    payload
  }
}

export function saveUserSuccess(payload) {
  return {
    type: SAVE_USER_SUCCESS,
    payload
  }
}

export function saveUserFailure(payload) {
  return {
    type: SAVE_USER_FAILURE,
    payload: payload
  }
}

export function validateUsernameSuccess(isValid) {
  return {
    type: VALIDATE_USERNAME_SUCCESS,
    payload: isValid
  }
}

export function validateUsernameFailure(error) {
  return {
    type: validateUsernameFailure,
    payload: error
  }
}

export function authenticationFailure(error) {
  return {
    type: AUTHENTICATION_FAILURE,
    payload: error
  }
}

export function setLocalUser() {
  return {
    type: SET_LOCAL_USER,
    payload: JSON.parse(localStorage.getItem("tals-user"))
  }
}

// HELPERS
const formatFormData = data => {
  let object = {}
  data.forEach(function(value, key) {
    object[key] = value
  })
  return object
}
