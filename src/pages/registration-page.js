import React from "react";
import { connect } from "react-redux";

function RegistrationPage() {
  return (
    <div id="register-form">
      <div class="login-register-field">
        <div class="label">username:</div>
        <div class="field">
          <input
            type="text"
            name="username"
            id="register_username"
            maxlength="10"
          />
        </div>
      </div>
      <div class="login-register-field">
        <div class="label">email:</div>
        <div class="field">
          <input 
            type="text" 
            name="email" 
            id="register_email" 
            />
        </div>
      </div>
      <div class="login-register-field">
        <div class="label">phone:</div>
        <div class="field">
          <input 
            type="text" 
            name="phone" 
            id="register_phone" 
            />
        </div>
      </div>
      <div class="login-register-field" id="contact_info">
        <div class="label">password:</div>
        <div class="field">
          <input 
            type="password" 
            name="password" 
            id="register_password" 
            />
        </div>
      </div>
      <div class="login-register-field" id="contact_info">
        <div class="label">password:</div>
        <div class="field">
          <input
            type="password"
            name="password_confirm"
            id="register_password_confirm"
          />
        </div>
      </div>
      <div class="login-register-field button">
        <div class="label">
          <input
            type="checkbox"
            name="photo_permission"
            id="register_photo_permission"
          />
          <span class="tiny-text">
            Yes, I grant permission to use my likeness or that of my child in
            promotional materials.
          </span>
        </div>
      </div>
      <div class="login-register-field button">
        <div class="label"></div>
        <div class="field">
          <button class="submit btn" id="registerSubmit">
            Register
          </button>
        </div>
      </div>
      <div id="login-form-link">
        Already registered? 
        <a href="/register">Click here</a>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(RegistrationPage);
