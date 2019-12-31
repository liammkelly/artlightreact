"use strict"
const routes = app => {
  let classes = require("../controller/classController")
  let users = require("../controller/userController")
  let events = require("../controller/eventController")

  app.route("/classes").get(classes.list_all_classes)

  app.route("/events").get(events.list_upcoming_events)

  app.route("/login").post(users.authenticate_user)

  app.route("/user")
    .post(users.register_user)
    .put(users.save_user)

  app.route("/refresh").post(users.refresh_token)

  app.route("/validate_username").post(users.validate_username)
}

module.exports = routes
