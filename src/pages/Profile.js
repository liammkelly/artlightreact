import React from "react"
import { logoutUser, saveUser, validateUsername } from "../actions/auth"
import { connect } from "react-redux"
import { checkPasswordValidity } from "../actions/helper"
import { Redirect } from "react-router-dom"

function ProfilePage(props) {
  const onSubmit = evt => {
    evt.preventDefault()
    if (!props.isUsernameInvalid && evt.target.reportValidity()) {
      const data = new FormData(evt.target)
      props.saveUser(data)
    }
  }

  const onUsernameBlur = evt => {
    const data = { username: evt.target.value }
    props.validateUsername(data)
  }

  const logoutUser = evt => {
    evt.preventDefault()
    debugger
    localStorage.removeItem("tals-user")
    props.logoutUser()
  }

  if (props.user == null) {
    return <Redirect to="/" />
  } else {
    return (
      <form id="profile-form" onSubmit={onSubmit}>
        <table>
          <tbody>
          <tr>
            <td>Username:</td>
            <td>
              <input
                type="text"
                required
                name="username"
                id="username"
                maxLength="14"
                onBlur={onUsernameBlur}
                defaultValue={props.user.username}
                pattern="[A-Za-z0-9]*"
                title="Username should only contain letters and numbers"
              />
              <input type="hidden" name="user_id" value={props.user.user_id} />
            </td>
          </tr>
          <tr>
            <td>First Name:</td>
            <td>
              <input
                type="text"
                name="firstname"
                id="firstname"
                defaultValue={props.user.firstname}
              />
            </td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>
              <input
                type="text"
                name="lastname"
                id="lastname"
                defaultValue={props.user.lastname}
              />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={props.user.email}
              />
            </td>
          </tr>
          <tr>
            <td>Phone Number:</td>
            <td>
              <input
                type="text"
                name="phone"
                id="phone"
                defaultValue={props.user.phone}
              />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input
                type="password"
                name="password"
                id="password"
                onBlur={checkPasswordValidity}
              />
            </td>
          </tr>
          <tr>
            <td>Confirm Password:</td>
            <td>
              <input
                type="password"
                name="password_confirm"
                id="password_confirm"
                onBlur={checkPasswordValidity}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <div>
                <input
                  type="checkbox"
                  name="photo_permission"
                  id="photo_permission"
                  defaultChecked={props.user.photo_permission}
                />
                <span className="tiny-text">
                  Yes, I grant permission to use my likeness or that of my child
                  in promotional materials.
                </span>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        <div className="login-register-field button">
          <div className="label"></div>
          <div className="field">
            <button className="submit btn">Save</button> 
            <button className="logout btn" onClick={logoutUser}>Log Out</button>
          </div>
        </div>
        }
      </form>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
})

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    saveUser: data => dispatch(saveUser(data)),
    validateUsername: data => dispatch(validateUsername(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
