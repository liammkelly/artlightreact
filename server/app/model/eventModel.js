"user strict"
var sql = require("./db.js")

let EventImpl = evt => {
  this.class_event_id = evt.class_event_id
  this.class_id = evt.class_id
  this.event_date = evt.event_date
  this.duration = evt.duration
  this.name = evt.name
}


EventImpl.deleteEvent = ({ classEventId }, callback) => {
  sql.query(
    "DELETE FROM `class_event` WHERE `class_event_id` = ?",
    [classEventId],
    (err, res) => {
      if (err) {
        console.log("error: ", err)
        callback(null, err)
      } else {
        callback(null, res)
      }
    }
  )
}

EventImpl.getUpcomingEvents = ({ start, end }, callback) => {
  sql.query(
    "select * from class_event where event_date >= ? AND event_date <= ? ",
    [start, end],
    (err, res) => {
      if (err) {
        console.log("error: ", err)
        callback(null, err)
      } else {
        callback(null, res)
      }
    }
  )
}

EventImpl.scheduleEvent = ({ classId, duration, datetime }, callback) => {
  sql.query(
    "INSERT INTO class_event (class_id, duration, event_date) VALUES (?,?,?)",
    [classId, duration, datetime],
    (err, res) => {
      if (err) {
        console.log("error: ", err)
        callback(null, err)
      } else {
        callback(null, res)
      }
    }
  )
}


module.exports = EventImpl
