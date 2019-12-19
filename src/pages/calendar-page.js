import React, { useEffect, useRef, useCallback } from "react"
import { connect } from "react-redux"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import listPlugin from "@fullcalendar/list"

import { getEvents } from "../actions"

import styled from "styled-components"
import "../styles/css/fullcalendar.css"

const CalendarWrapper = styled.div`
  position: relative;
  float: left;
  width: 100%;

  IMG {
      width:100%;
      position: absolute;
      top: 0;
      left: 0;
  }

  #calendar_container {
      float : left;
      width:100%;
      overflow: scroll;
      
      .fc {
        float : left;
        overflow: hidden;
        position: absolute;
        left: 0;
        z-index: 100;
        font-family: "AvenirBook";
        color: #FFF;
        // background-color: #FFF;
        // margin: 0 10%;
        
        .fc-today {
          background-color: #03C;
        }
        
        .fc-event {
          line-height: 1;
          margin-bottom: 3px;
          padding: 3px;
        }
      }
    }
  `
      
  function useHookWithRefCallback() {
    const ref = useRef(null)
    const setRef = useCallback(node => {

      if (ref.current) {
        // Make sure to cleanup any events/references added to the last instance
      }
      
      if (node) {
        // Check if a node is actually passed. Otherwise node would be null.
        // You can now do what you need to, addEventListeners, measure, etc.
      }
      
      // Save a reference to the node
      ref.current = node
    }, [])
    
    return [setRef]
  }
  
function CalendarPage(props) {
  useEffect(prevState => {
    props.getEvents()
  }, [])

  calendarComponentRef = React.createRef()

  // const [ref] = useHookWithRefCallback()
  
  const onCalendarRender = info => {
    info.el.setAttribute('width',document.getElementById('calendarBgImg').width)
  } 

  return (
    <CalendarWrapper>
        <div id="calendar_container">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev",
              center: "title",
              right: "next"
            }}
            viewSkeletonRender={onCalendarRender}
            plugins={[dayGridPlugin, listPlugin]}
            weekends={true}
            events={props.events}
            ref={calendarComponentRef}
            contentHeight="auto"
            height={518}
          />
        </div>
        <img src={require("../public/images/calendartexture.jpg")} id="calendarBgImg" />
    </CalendarWrapper>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => dispatch(getEvents())
  }
}

const mapStateToProps = state => ({
  events: state.classes.events
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage)
