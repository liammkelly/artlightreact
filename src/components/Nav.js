import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Navigation = styled.div`
  width: 40%;
  float: left;
  clear: none;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

const Nav = props => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = e => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <Navigation>
      <nav className="nav">
        <i
          className="fa fa-bars"
          aria-hidden="true"
          onClick={e => handleToggle(e)}
        />
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink activeClassName="active" to="/">
            <li>home</li>
          </NavLink>
          <NavLink activeClassName="active" to="/classes">
            <li>classes</li>
          </NavLink>
          <NavLink activeClassName="active" to="/information">
            <li>information</li>
          </NavLink>
          <NavLink activeClassName="active" to="/gallery">
            <li>gallery</li>
          </NavLink>
          <NavLink activeClassName="active" to="/calendar">
            <li>calendar</li>
          </NavLink>
        </ul>
      </nav>
    </Navigation>
  );
}

export default Nav;
