import React from "react"
import { loginUser } from "../actions"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

function LoginPage(props) {
  const onSubmit = e => {
    e.preventDefault()
    const data = new FormData(e.target)
    props.loginUser(data)
  }

  if (props.user != null) {
    return <Redirect to="/" />
  } else {
    return (
      <form id="login-form" onSubmit={onSubmit}>
        <div className="header">
          <p>Welcome to our little society. We are happy to have you.</p>
          <p>
            Mindfulness is not a switch we can turn on, it is a journey and an
            undertaking, in which we learn to observe our thoughts with
            compassion and react to life with an open heart as it unfolds.
          </p>
          <p>
            We hope our classes will serve you as a guide, reminder and support
            for this pursuit of happiness.
          </p>
        </div>
        <div className="login-register-field">
          <div className="label">
            <label htmlFor="username">Username</label>
          </div>
          <div className="field">
            <input type="text" name="username" id="username" />
          </div>
        </div>
        <div className="login-register-field">
          <div className="label">
            <label htmlFor="username">Password</label>
          </div>
          <div className="field">
            <input type="text" name="password" id="password" />
          </div>
        </div>
        <div className="login-register-field">
          <div>
            <button>LOG IN</button>
            {props.didLoginFail && (
              <div style={{ color: "red" }}>Sorry, authentication failed.</div>
            )}
            <p>
              Not registered yet? <a href="/register">Click here</a>
            </p>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  didLoginFail: state.auth.didLoginFail
})

const mapDispatchToProps = dispatch => {
  return {
    loginUser: data => dispatch(loginUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
