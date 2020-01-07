import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { loadEvents, deleteClassEvent } from "../../actions/admin"
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
import AdminWrapper from "./AdminWrapper"

const mapStateToProps = state => {
  return {
    events: state.classes.events
  }
}

const mapDispatchToProps = {
  deleteClassEvent,
  loadEvents
}

const ConnectedEventList = props => {
  const [selectedEvent, setSelectedEvent] = useState(0)

  useEffect(() => {
    props.loadEvents()
  }, [])

  const confirmDelete = evt => {
    evt.preventDefault()

    let selectedId = evt.target.dataset.id
    let deleteRow = () => {
      props.deleteClassEvent(selectedId)
    }

    confirmAlert({
      title: "Confirm",
      message: "Are you sure you want to delete this scheduled class?",
      buttons: [
        {
          label: "Yes",
          onClick: deleteRow
        },
        {
          label: "Cancel",
          onClick: () => {
            /* do nothing */
          }
        }
      ],
      closeOnClickOutside: true
    })
  }

  return (
    <AdminWrapper>
      <ul>
        {props.events.map(el => (
          <li>
            {el.title} @ {el.start} [{" "}
            <a
              href=""
              key={el.class_event_id}
              data-id={el.class_event_id}
              onClick={confirmDelete}
            >
              delete
            </a>{" "}
            ]{" "}
          </li>
        ))}
      </ul>
    </AdminWrapper>
  )
}

const EventList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedEventList)

export default EventList
