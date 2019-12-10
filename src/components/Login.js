import React from "react";
import { connect } from "react-redux";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = props => (
  <div id="login-area">
    <div id="login-text" style={{ float: "right" }}>
      {props.user === null ? (
        <a href="/login">join us</a>
      ) : props.user.is_admin === 1 ? (
        <a href="/admin">admin</a>
      ) : (
        <a href="/profile">{props.user.username}</a>
      )}
    </div>
    <div id="login-icon" style={{ float: "right" }}>
      <a href={props.user === null ? "/login" : "/user"} id="login-menu-toggle" className="login-link" data-login="0">
        <FontAwesomeIcon icon={faUserCircle} />
      </a>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Login);
