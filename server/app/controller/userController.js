"use strict"

const User = require("../model/userModel")
const jwt = require("jsonwebtoken")

const jwtExpirySeconds = 3600

exports.authenticate_user = (req, res) => {
  User.authenticateUser(req.body, (err, users) => {
    if (err) res.send(err)
    if (users.length) {
      const user = users[0]
      delete user.password
      respondWithAuth(res, user.username, user)
    } else {
      res.sendStatus(401)
    }
  })
}

exports.register_user = (req, res) => {
  User.registerUser(req.body, err => {
    if (err) res.send(err)
    const user = User.fetchUser(req.body.username)
    respondWithAuth(res, user.username, user)
  })
}

exports.save_user = (req, res) => {
  User.saveUser(req.body, err => {
    if (err) res.send(err)
    const user = User.findByUsername(req.body.username)
    respondWithAuth(res, user.username, user)
  })
}

exports.validate_username = (req, res) => {
  User.validateUsername(req.body, (err, isValid) => {
    if (err) res.send(err)
    res.send(isValid)
  })
}

exports.refresh_token = (req, res) => {
  const token = req.cookies['jwt']

  if (!token) {
    return res.status(401).end()
  }

  let payload
  try {
    payload = jwt.verify(token, process.env.AUTH_SECRET)
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end()
    }
    return res.status(400).end()
  }

  const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
  if (payload.exp - nowUnixSeconds > 30) {
    return res.status(400).end()
  }
  
  const newToken = jwt.sign({ username: payload.username }, process.env.AUTH_SECRET, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds
  })

  res.cookie('token', newToken, { maxAge: jwtExpirySeconds * 1000 })
  res.end()
}

const getUserResponseText = data => {
  data.is_admin = 0
  delete data.password
  delete data.password_confirm

  return data
}

const respondWithAuth = (response, username, responseText) => {
  const payload = { username }
  const token = jwt.sign(payload, process.env.AUTH_SECRET, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds
  })

  response.cookie("jwt", token, { httpOnly: true })
  
  if (responseText) {
    response.send(responseText)
  } else {
    response.sendStatus(200)
  }
}

