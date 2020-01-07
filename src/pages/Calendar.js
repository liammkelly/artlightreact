import React, { useEffect, useRef } from "react"
import { connect } from "react-redux"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import listPlugin from "@fullcalendar/list"

import { getEvents } from "../actions/classes"

import styled from "styled-components"
import "../styles/css/fullcalendar.css"

const CalendarWrapper = styled.div`
  position: relative;
  float: left;
  width: 100%;

  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  #calendar_container {
    float: left;
    width: 100%;
    overflow: scroll;

    .fc {
      float: left;
      overflow: hidden;
      position: absolute;
      left: 0;
      z-index: 100;
      font-family: "AvenirBook";
      color: #fff;
      // background-color: #FFF;
      // margin: 0 10%;

      .fc-today {
        background-color: #03c;
      }

      .fc-event {
        line-height: 1;
        margin-bottom: 3px;
        padding: 3px;
      }
    }
  }
`

function CalendarPage(props) {
  useEffect(prevState => {
    props.getEvents()
  }, [])

  // calendarComponentRef = useRef(null)

  // const [ref] = useHookWithRefCallback()

  const getRange = currentDate => {
    // Generate a new date for manipulating in the next step
    var startDate = new Date(currentDate.valueOf())
    var endDate = new Date(currentDate.valueOf())

    // Adjust the start & end dates, respectively
    startDate.setDate(startDate.getDate() - 1) // One day in the past
    endDate.setDate(endDate.getDate() + 2) // Two days into the future

    return { start: startDate, end: endDate }
  }

  async function getCalendarData(fetchInfo, successCallback) {
    try {
      let year = new Date().getFullYear()
      let month = new Date().getMonth() + 1

debugger

      if (fetchInfo) {
        year = new Date(fetchInfo.start).getFullYear()
        month = new Date(fetchInfo.start).getMonth() + 1
      }

      const response = await fetch.get("/events", { year, month })

      successCallback(
        response.data.appointments.map(event => {
          return {
            id: event.id,
            title: event.name,
            start: event.datetime_start,
            end: event.datetime_finish
          }
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  const onCalendarRender = info => {
    info.el.setAttribute(
      "width",
      document.getElementById("calendarBgImg").width
    )
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
          events={(fetchInfo, successCallback, failureCallback) =>
            getCalendarData(fetchInfo, successCallback, failureCallback)
          }
          visibleRange={getRange}
          contentHeight="auto"
          height={518}
        />
      </div>
      <img
        src={require("../public/images/calendartexture.jpg")}
        id="calendarBgImg"
      />
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
