"user strict"
var sql = require("./db.js")

let EventImpl = evt => {
  this.class_event_id = evt.class_event_id
  this.class_id = evt.class_id
  this.event_date = evt.event_date
  this.duration = evt.duration
  this.name = evt.name
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

module.exports = EventImpl
