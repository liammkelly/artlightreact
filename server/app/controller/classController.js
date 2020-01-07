"use strict"

var Class = require("../model/classModel")

exports.create_class = (req, res) => {
  Class.addClass((err,cls) => {
    if (err) res.send(err)
    res.send(cls)
  })
}

exports.list_all_classes = (req, res) => {
  Class.getAllClasses((err,cls) => {
    if (err) res.send(err)
    res.send(cls)
  })
}

exports.request_class = (req, res) => {
  Class.requestClass(req.body, (err,cls) => {
    if (err) res.send(err)
    res.send(cls)
  })
}

