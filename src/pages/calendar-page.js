import React, { useEffect } from "react"
import { connect } from "react-redux"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import { getEvents } from "../actions"

function CalendarPage(props) {

  useEffect(prevState => {
    props.getEvents()
  }, [])

  return (
    <div>
      <FullCalendar
        defaultView="dayGridMonth"
        header={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        weekends={true}
        events={props.events}
      />
    </div>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(CalendarPage)
