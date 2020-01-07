"use strict"
let sql = require("./db.js"),
  nodemailer = require("nodemailer")

let mailer = nodemailer.createTransport({
  host: process.env.MAIL_SERVER,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
})

let ClassImpl = cls => {
  this.name = cls.name
  this.subtitle = cls.subtitle
  this.image = cls.image
  this.mobile_image = cls.mobile_image
  this.sort_order = cls.sort_order
}

ClassImpl.getAllClasses = result => {
  sql.query("select * from class", function(err, res) {
    if (err) {
      console.log("error: ", err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

ClassImpl.addClass = ({ name }, result) => {
  sql.query(
    "INSERT INTO `class` (`name`,`sort_order`) VALUES (?,0)",
    [name],
    function(err, res) {
      if (err) {
        console.log("error: ", err)
        result(null, err)
      } else {
        result(null, res)
      }
    }
  )
}

ClassImpl.requestClass = ({ name, className, dayOfWeek, time, contactinfo },result) => {
  const msgBody = `
    Name: ${name}<br>
    Contact: ${contactinfo}<br>
    Class: ${className}<br>
    Day: ${dayOfWeek}<br>
    Time: ${time}
  `

  const message = {
    from: "artandlightsociety@gmail.com",
    to: "artandlightsociety@gmail.com",
    subject: "Class request",
    html: msgBody
  }

  mailer.sendMail(message, function(err, info) {
    if (err) {
      result(null,err)
    } else {
      result(null, info)
    }
  })
}

module.exports = ClassImpl
