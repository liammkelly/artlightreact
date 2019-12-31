import {
    API,
    DELETE_EVENT_START,
    DELETE_EVENT_FAILURE,
    LOAD_CLASSES_SUCCESS,
    LOAD_CLASSES_START,
    LOAD_CLASSES_FAILURE,
    LOAD_EVENTS_SUCCESS,
    LOAD_EVENTS_START,
    LOAD_EVENTS_FAILURE,
    ADD_CLASS_START,
    ADD_CLASS_FAILURE,
    ADD_CLASS_SUCCESS,
    SCHEDULE_EVENT_START,
    SCHEDULE_EVENT_FAILURE,
    SCHEDULE_EVENT_SUCCESS,
    DELETE_EVENT_SUCCESS
  } from "../actionTypes"
  
  export const addNewClass = title => {
    return apiAction({
      url: '/admin/class/add',
      data: title,
      method: 'POST',
      onSuccess: () => {
        loadClasses()
        addNewClassSuccess()
      },
      onFailure: addNewClassFailure,
      label: ADD_CLASS_START
    })
  }
  
  export const deleteClassEvent = id => {
    return apiAction({
      url: `/event/delete/${id}`,
      method: 'POST',
      onSuccess: deleteEventSuccess,
      onFailure: deleteEventFailure,
      label: DELETE_EVENT_START
    });
  }
  
  export function loadClasses() {
    return apiAction({
      url: "/classes/all",
      onSuccess: loadClassesSuccess,
      onFailure: loadClassesFailure,
      label: LOAD_CLASSES_START
    });
  }
  
  export function loadEvents() {
    return apiAction({
      url: "/class/events/all",
      onSuccess: loadEventsSuccess,
      onFailure: loadEventsFailure,
      label: LOAD_EVENTS_START
    });
  }
  
  export const scheduleEvent = payload => {
    return apiAction({
      url: '/admin/event/add',
      data: payload,
      method: 'POST',
      onSuccess: () => {
        loadClasses()
        scheduleEventSuccess()
      },
      onFailure: scheduleEventFailure,
      label: SCHEDULE_EVENT_START
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
    };
  }
  
  /* PLAIN OBJECTS */
  export function loadClassesSuccess(payload) {
    return {
      type: LOAD_CLASSES_SUCCESS,
      payload
    };
  }
  
  export function loadClassesFailure(payload) {
    return {
      type: LOAD_CLASSES_FAILURE,
      payload
    };
  }
  
  export function loadEventsSuccess(payload) {
    return {
      type: LOAD_EVENTS_SUCCESS,
      payload
    };
  }
  
  export function loadEventsFailure(payload) {
    return {
      type: LOAD_EVENTS_FAILURE,
      payload
    }
  }
  
  export function deleteEventFailure(error) {
    return {
      type: DELETE_EVENT_FAILURE,
      error
    }
  }
  
  export function deleteEventSuccess() {
    return {
      type: DELETE_EVENT_SUCCESS
    }
  }
  
  export function addNewClassFailure(error) {
    return {
      type: ADD_CLASS_FAILURE,
      error
    }
  }
  
  export function addNewClassSuccess() {
    return {
      type: ADD_CLASS_SUCCESS
    }
  }
  
  export function scheduleEventFailure(error) {
    return {
      type: SCHEDULE_EVENT_FAILURE,
      error
    }
  }
  
  export function scheduleEventSuccess() {
    return {
      type: SCHEDULE_EVENT_SUCCESS
    }
  }
  
  