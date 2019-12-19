"use strict"

const User = require("../model/userModel")
const jwt = require("jsonwebtoken")

exports.authenticate_user = (req, res) => {
  User.authenticateUser(req.body, (err, users) => {
    if (err) res.send(err)
    if (users.length) {
      const user = getUserResponseText(req.body)
      sendAuthCookie(res, req.body.username, user)
    } else {
      res.sendStatus(401)
    }
  })
}

exports.register_user = (req, res) => {
  User.registerUser(req.body, err => {
    if (err) res.send(err)
    const user = getUserResponseText(req.body)
    sendAuthCookie(res, req.body.username, user)
  })
}

exports.validate_username = (req, res) => {
  User.validateUsername(req.body, (err, isValid) => {
    if (err) res.send(err)
    res.send(isValid)
  })
}

const getUserResponseText = data => {
  data.is_admin = 0
  delete data.password
  delete data.password_confirm

  return data
}

const sendAuthCookie = (response, username, responseText) => {
  const payload = { username }
  const token = jwt.sign(payload, process.env.AUTH_SECRET, {
    expiresIn: "1h"
  })
  response.cookie("token", token, { httpOnly: true })
  if (responseText) {
    response.send(responseText)
  } else {
    response.sendStatus(200)
  }
}