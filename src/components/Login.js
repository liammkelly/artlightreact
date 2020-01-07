import React from "react";
import { connect } from "react-redux";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components"

const LoginAreaWrapper = styled.div`
  width: 38%;
  float: right;
  font-family: AvenirBook;
  margin: 9px 2% 10px 0;
  font-size: 18px;
  a {
    color: black;
    text-decoration: none;
  }

  #login-icon,
  #login-text {
    float: right;
    margin-left: 6px;
  }
`

const Login = props => (
  <LoginAreaWrapper>
    <div id="login-text">
      {props.user === null ? (
        <a href="/login">join us</a>
      ) : props.user.is_admin === 1 ? (
        <a href="/admin">admin</a>
      ) : (
        <a href="/profile">{props.user.username}</a>
      )}
    </div>
    <div id="login-icon">
      <a href={props.user === null ? "/login" : "/user"} id="login-menu-toggle" className="login-link" data-login="0">
        <FontAwesomeIcon icon={faUserCircle} />
      </a>
    </div>
  </LoginAreaWrapper>
);

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Login);
