import {
  LOAD_CLASSES_SUCCESS,
  LOAD_CLASSES_FAILURE,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_FAILURE,
  REQUEST_CLASS_FAILURE,
  REQUEST_CLASS_SUCCESS
} from "../actionTypes"

const classesReducer = (
  state = { classes: [], events: [], didRequestClass: false },
  action
) => {
  switch (action.type) {
    case LOAD_CLASSES_FAILURE:
      return Object.assign({}, state, { classes: [] })
    case LOAD_CLASSES_SUCCESS:
      return Object.assign({}, state, { classes: action.payload })
    case LOAD_EVENTS_FAILURE:
      return Object.assign({}, state, { events: [] })
    case LOAD_EVENTS_SUCCESS:
      return Object.assign({}, state, { events: action.payload })
    case REQUEST_CLASS_FAILURE:
      return Object.assign({}, state, { didRequestClass: null })
    case REQUEST_CLASS_SUCCESS:
      return Object.assign({}, state, { didRequestClass: true })
    default:
      return state
  }
}

export default classesReducer
