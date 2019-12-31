import React from "react"
import { saveUser, validateUsername } from "../actions"
import { connect } from "react-redux"
import { checkPasswordValidity } from "../actions/helper"
import { Redirect } from "react-router-dom"

function ProfilePage(props) {
  const onSubmit = e => {
    e.preventDefault()
    if (!props.isUsernameInvalid && e.target.reportValidity()) {
      const data = new FormData(e.target)
      props.saveUser(data)
    }
  }

  const onUsernameBlur = e => {
    const data = { username: e.target.value }
    props.validateUsername(data)
  }

  if (props.user == null) {
    return <Redirect to="/" />
  } else {
    return (
      <form id="profile-form" onSubmit={onSubmit}>
        <table>
          <tr>
            <td>Username:</td>
            <td>
              <input
                type="text"
                required
                name="username"
                id="username"
                maxlength="14"
                onBlur={onUsernameBlur}
                value={props.user.username}
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
                value={props.user.firstname}
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
                value={props.user.lastname}
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
                value={props.user.email}
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
                value={props.user.phone}
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
            <td colspan="2">
              <div>
                <input
                  type="checkbox"
                  name="photo_permission"
                  id="photo_permission"
                  checked={props.user.photo_permission}
                />
                <span class="tiny-text">
                  Yes, I grant permission to use my likeness or that of my child
                  in promotional materials.
                </span>
              </div>
            </td>
          </tr>
        </table>
        <div class="login-register-field button">
          <div class="label"></div>
          <div class="field">
            <button class="submit btn">Save</button> <button class="logout btn">Log Out</button>
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
    saveUser: data => dispatch(saveUser(data)),
    validateUsername: data => dispatch(validateUsername(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
