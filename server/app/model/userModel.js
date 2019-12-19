"user strict"
var sql = require("./db.js")

let UserImpl = user => {
  this.username = user.username
  this.password = user.password
  this.email = user.email
  this.inserted_on = user.inserted_on
  this.modified_on = user.modified_on
  this.is_admin = user.is_admin
  this.firstname = user.firstname
  this.lastname = user.lastname
  this.phone = user.phone
  this.photo_permission = user.photo_permission
}

UserImpl.authenticateUser = ({username,password}, result) => {
    sql.query(
    "select * from `user` where `username`=? and `password`=?",
    [username, password],
    function(err, res) {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    }
  )
}

UserImpl.registerUser = (user,result) => {
  delete user.password_confirm
  sql.query("INSERT INTO `user` SET ?", user, function(err, res) {
    if (err) {
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

UserImpl.validateUsername = ({username},result) => {
  sql.query("SELECT * FROM `user` WHERE `username` = ?", [username], function(err, res) {
    if (err) {
      result(null, err)
    } else {
      result(null, res.length == 0)
    }
  })
}

module.exports = UserImpl
