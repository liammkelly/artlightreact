"use strict"
const routes = app => {
  let classes = require("../controller/classController")
  let users = require("../controller/userController")
  let events = require("../controller/eventController")

  app.route("/classes").get(classes.list_all_classes)

  app.route("/events").get(events.list_upcoming_events)

  app.route("/login").post(users.authenticate_user)

  app.route("/user").post(users.add_user)
}

module.exports = routes
