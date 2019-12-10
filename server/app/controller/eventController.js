"use strict"

const Event = require("../model/eventModel")

exports.list_upcoming_events = (req, res) => {
    Event.getUpcomingEvents(req.body, (err,cls) => {
    if (err) res.send(err)
    res.send(cls)
  })
}
