"use strict"

const User = require("../model/userModel")
const jwt = require('jsonwebtoken')

exports.authenticate_user = (req, res) => {
  User.authenticateUser(req.body, (err, users) => {
    if (err) res.send(err)
    if (users.length) {
      const {username} = req.body
      const payload = { username }
      const token = jwt.sign(payload, process.env.AUTH_SECRET, { expiresIn: '1h' })
      res
        .cookie('token', token, { httpOnly: true })
        .sendStatus(200)
    } else {
      res
        .sendStatus(401)
    }
  })
}

exports.add_user = (req, res) => {
  User.addUser((err, cls) => {
    if (err) res.send(err)
    console.log("res", cls)
    res.send(cls)
  })
}
