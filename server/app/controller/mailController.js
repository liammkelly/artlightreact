"use strict"

let nodemailer = require("nodemailer")

let transport = nodemailer.createTransport({
  host: process.env.MAIL_SERVER,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
})

const getFeedbackLabel = item => {
    if (item === "what_perceive") {
        return "How do you perceive A&LS?"
    } else if (item === "who_classes") {
        return "Who do you think would enjoy these classes?"
    } else if (item === "when_classes") {
        return "What times would be most convenient for you?"
    } else {
        return item.replace(/_/g, " ")
    }
}

exports.submit_feedback = (req, res) => {
  let htmlBody = ""
  Object.keys(req.body).map(itm => (htmlBody += `${getFeedbackLabel(itm)}: ${req.body[itm]}<br>`))

  const message = {
    from: "artandlightsociety@gmail.com",
    to: "artandlightsociety@gmail.com",
    subject: "Feedback",
    html: htmlBody
  }

  transport.sendMail(message, function(err, info) {
    res.send(info)
  })
}

