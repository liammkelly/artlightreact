import {
  API,
  SUBMIT_FEEDBACK_FAILURE,
  SUBMIT_FEEDBACK_START,
  SUBMIT_FEEDBACK_SUCCESS
} from "../actionTypes"

export const submitFeedback = data => {
  return apiAction({
    url: "/feedback",
    method: "POST",
    data: formatFormData(data),
    onSuccess: submitFeedbackSuccess,
    onFailure: submitFeedbackFailure,
    label: SUBMIT_FEEDBACK_START
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

export const submitFeedbackFailure = () => {
  return {
    type: SUBMIT_FEEDBACK_FAILURE
  }
}

export const submitFeedbackSuccess = () => {
  return {
    type: SUBMIT_FEEDBACK_SUCCESS
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
