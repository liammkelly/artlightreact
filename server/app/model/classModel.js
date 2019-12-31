"user strict"
var sql = require("./db.js")

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

ClassImpl.addClass = result => {
  sql.query("INSERT INTO `class` (`name`,`sort_order`) VALUES (?,0)",[name], function(err, res) {
    if (err) {
      console.log("error: ", err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = ClassImpl