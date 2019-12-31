"use strict"

const Event = require("../model/eventModel")


exports.delete_event = (req, res) => {
  Event.deleteEvent(req.body, (err, cls) => {
    if (err) res.send(err)
    res.send(cls)
  })
}

exports.list_upcoming_events = (req, res) => {
  Event.getUpcomingEvents(req.body, (err, cls) => {
    if (err) res.send(err)
    res.send(cls)
  })
}

exports.schedule_event = (req, res) => {
  Event.scheduleEvent(req.body, (err, cls) => {
    if (err) res.send(err)
    res.send(cls)
  })
}
