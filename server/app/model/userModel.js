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
        console.log("error: ", err)
        result(null, err)
      } else {
        result(null, res)
      }
    }
  )
}

UserImpl.addUser = user => {
  sql.query("INSERT INTO User SET ?", user, function(err, res) {
    if (err) {
      console.log("error: ", err)
      result(null, err)
    } else {
      console.log("tasks : ", res)
      result(null, res)
    }
  })
}

module.exports = UserImpl
