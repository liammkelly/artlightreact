import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import Datetime from "react-datetime"
import { scheduleEvent, loadClasses } from "../../actions/admin"
import moment from "moment"
import AdminWrapper from "./AdminWrapper"

const mapStateToProps = state => {
  return { classes: state.classes.classes }
}

function mapDispatchToProps(dispatch) {
  return {
    scheduleEvent: cls => dispatch(scheduleEvent(cls)),
    loadClasses: () => dispatch(loadClasses())
  }
}

const ConnectedForm = props => {
  const [classId, setClassId] = useState("")
  const [duration, setDuration] = useState(90)
  const [eventDate, setEventDate] = useState("")

  useEffect(() => {
    props.loadClasses()
    resetVals()
  }, [])

  const resetVals = () => {
    setClassId("")
    setDuration(90)
    setEventDate("")
  }

  const handleChange = event => {
    if (event.target.id == "duration") {
      setDuration(event.target.value)
    } else {
      setClassId(event.target.value)
    }
  }

  const handleDatetimeChange = moment => {
    setEventDate(moment.toDate())
  }

  const handleSubmit = event => {
    event.preventDefault()
    const datetime = moment(eventDate).format("YYYY-MM-DD HH:mm")
    props.scheduleEvent({ classId, duration, datetime })
    resetVals()
  }

  return (
    <AdminWrapper>
      <div className="admin-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="class_id">Class</label>
            <select id="classId" value={classId} onChange={handleChange}>
              <option>Select a class</option>
              {props.classes.map(cls => (
                <option value={cls.class_id}>{cls.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="event_date">Date and time</label>
            <Datetime
              id="eventDate"
              value={eventDate}
              onChange={handleDatetimeChange}
            />
          </div>
          <div>
            <label htmlFor="duration">Duration</label>
            <input type="number" id="duration" value={duration} />
          </div>
          <button type="submit">SAVE</button>
        </form>
      </div>
    </AdminWrapper>
  )
}
const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm)
export default Form
