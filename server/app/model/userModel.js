"user strict"
var sql = require("./db.js")

let UserImpl = user => {
  this.user_id = user.user_id
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

UserImpl.authenticateUser = ({ username, password }, result) => {
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

UserImpl.findByUsername = username => {
  sql.query(
    "select `user_id`,`username`,`email`,`firstname`,`lastname`,`phone`,`is_admin`,`photo_permission` from `user` where `username`=?", 
    [username], 
    function(err, res) {
      console.log("result =",res)
      return err ? err : res[0]
    }
  )
}

UserImpl.registerUser = (user, result) => {
  delete user.password_confirm
  sql.query("INSERT INTO `user` SET ?", user, function(err, res) {
    if (err) {
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

UserImpl.saveUser = (user, result) => {
  sql.query(
    "UPDATE `user` SET `email` = ?, `firstname` = ?, `lastname` = ?, `phone` = ?, `photo_permission` = ?, `password` = ? WHERE `id` = ? ",
    [
      user.email,
      user.firstname,
      user.lastname,
      user.phone,
      user.photo_permission,
      user.password,
      user.user_id
    ],
    function(err, res) {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    }
  )
}

UserImpl.validateUsername = ({ username }, result) => {
  sql.query("SELECT * FROM `user` WHERE `username` = ?", [username], function(
    err,
    res
  ) {
    if (err) {
      result(null, err)
    } else {
      result(null, res.length == 0)
    }
  })
}

module.exports = UserImpl
