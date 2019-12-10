import {
  API,
  AUTHENTICATION_FAILURE,
  LOAD_CLASSES_START,
  LOAD_CLASSES_SUCCESS,
  LOAD_CLASSES_FAILURE,
  LOAD_EVENTS_START,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REQUEST_CLASS_START,
  REQUEST_CLASS_SUCCESS,
  REQUEST_CLASS_FAILURE
} from "../actionTypes"

export const getClasses = () => {
  return apiAction({
    url: "/classes",
    method: "GET",
    onSuccess: loadClassesSuccess,
    onFailure: loadClassesFailure,
    label: LOAD_CLASSES_START
  })
}

export const getEvents = () => {
  return apiAction({
    url: "/events",
    method: "GET",
    onSuccess: loadEventsSuccess,
    onFailure: loadEventsFailure,
    label: LOAD_EVENTS_START
  })
}

export const requestClass = data => {
  return apiAction({
    url: "/request",
    method: "POST",
    data: formatFormData(data),
    onSuccess: requestClassSuccess,
    onFailure: requestClassFailure,
    label: REQUEST_CLASS_START
  })
}

export const loginUser = data => {
  return apiAction({
    url: "/login",
    method: "POST",
    data: formatFormData(data),
    onSuccess: result => {
      if (!result.length) {
        return authenticationFailure()
      } else {
        return loginSuccess(result)
      }
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

/* PLAIN OBJECTS */
export function loadClassesSuccess(classes) {
  return {
    type: LOAD_CLASSES_SUCCESS,
    payload: classes
  }
}

export function loadClassesFailure(error) {
  return {
    type: LOAD_CLASSES_FAILURE,
    payload: error
  }
}

export function loadEventsSuccess(classes) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    payload: classes
  }
}

export function loadEventsFailure(error) {
  return {
    type: LOAD_EVENTS_FAILURE,
    payload: error
  }
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  }
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}

export function requestClassSuccess(user) {
  return {
    type: REQUEST_CLASS_SUCCESS
  }
}

export function requestClassFailure(error) {
  return {
    type: REQUEST_CLASS_FAILURE,
    payload: error
  }
}

export function authenticationFailure(error) {
  return {
    type: AUTHENTICATION_FAILURE,
    payload: error
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