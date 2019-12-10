"use strict"

var Class = require("../model/classModel")

exports.list_all_classes = (req, res) => {
  Class.getAllClasses((err,cls) => {
    if (err) res.send(err)
    res.send(cls)
  })
}
