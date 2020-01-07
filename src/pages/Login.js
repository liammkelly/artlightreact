import React from "react"
import { loginUser } from "../actions/auth"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import { talsBlue, selectorFieldBorderWidth } from "../styles/styleVars"
import styled from "styled-components"

const LoginWrapper = styled.div`
  font-family: AvenirBook;
  width: 800px;
  margin: 0 auto;
  padding: 100px 0 0;

  table {
      margin: 0 auto;
      font-family: "AvenirBook";
  }

  .header {
      width: 76%;
      margin: 0 12% 30px;
      text-align: center;
  }

  #login-form-link {
      width: 100%;
      text-align: center;
      color: white;
      font-size: 36px;

      a, a:visited {
          color: white;
      }
  }

  .login-register-field {
      width: 100%;

      .controls {
        width: 100%;
        text-align: center;
      }

      &.button {
          margin: 40px 0px;
      }

      .label,
      .field {
          text-align: center;
          clear: both;
          width: 100%;
          margin: 0 0 10px 0;
      }

      .field {
          height: auto;
          text-align: center;
          clear: both;
          width: 100%;

          input {
              width: 150px;
          }

          input,
          button {
              border: ${selectorFieldBorderWidth} solid ${talsBlue};
              margin: ${selectorFieldBorderWidth};
          }

          .submit.btn {
              font-size: 1.2em !important;
              padding: 5px 10px;
              cursor: pointer;
          }
      }
  }        
}

  `

function LoginPage(props) {
  const onSubmit = evt => {
    evt.preventDefault()
    const data = new FormData(evt.target)
    props.loginUser(data)
  }

  if (props.user != null) {
    return <Redirect to="/" />
  } else {
    return (
      <LoginWrapper>
        <form id="login-form2" onSubmit={onSubmit}>
          <div className="header">
            <p>Welcome to our little society. We are happy to have you.</p>
            <p>
              Mindfulness is not a switch we can turn on, it is a journey and an
              undertaking, in which we learn to observe our thoughts with
              compassion and react to life with an open heart as it unfolds.
            </p>
            <p>
              We hope our classes will serve you as a guide, reminder and
              support for this pursuit of happiness.
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
              <input type="password" name="password" id="password" />
            </div>
          </div>
          <div className="login-register-field button">
            <div className="controls">
              <button className="submit btn">LOG IN</button>
              {props.didLoginFail && (
                <div style={{ color: "red" }}>
                  Sorry, authentication failed.
                </div>
              )}
              <p>
                Not registered yet? <a href="/register">Click here</a>
              </p>
            </div>
          </div>
        </form>
      </LoginWrapper>
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
