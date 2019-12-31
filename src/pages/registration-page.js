import React from "react"
import { registerUser, validateUsername } from "../actions"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { checkPasswordValidity } from "../actions/helper"

function RegistrationPage(props) {
  const onSubmit = e => {
    e.preventDefault()
    if (!props.isUsernameInvalid && e.target.reportValidity()) {
      const data = new FormData(e.target)
      props.registerUser(data)
    }
  }

  const onUsernameBlur = e => {
    const data = { username: e.target.value }
    props.validateUsername(data)
  }

  if (props.user != null) {
    return <Redirect to="/" />
  } else {
    return (
      <form id="register-form" onSubmit={onSubmit}>
        <table>
          <tr>
            <td>Username:</td>
            <td>
              <input
                type="text"
                required
                name="username"
                id="register_username"
                maxlength="14"
                onBlur={onUsernameBlur}
                pattern="[A-Za-z0-9]*"
                title="Username should only contain letters and numbers"
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
                required 
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
                required 
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
                required 
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
                required
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
            <button class="submit btn" id="registerSubmit">
              Register
            </button>
            {props.isUsernameInvalid != null && props.isUsernameInvalid && (
              <div class="danger">
                The username you have entered is invalid, please update.
              </div>
            )}
            {
              props.didRegisterFail && 
              <div class="danger">
                Sorry, registration was not successful.  <a href="mailto:artandlightsociety@gmail.com">Contact us</a> for assistance.
              </div>
            }
          </div>
        </div>
        }
        <div id="login-form-link">
          Already registered?
          <a href="/register">Click here</a>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  didRegisterFail: state.auth.didRegisterFail,
  isUsernameInvalid: state.auth.isUsernameInvalid
})

const mapDispatchToProps = dispatch => {
  return {
    registerUser: data => dispatch(registerUser(data)),
    validateUsername: data => dispatch(validateUsername(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)
