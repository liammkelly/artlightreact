import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Navigation = styled.div`
  width: 60%;
  float: left;
  clear: none;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: AvenirBook;

  nav {
    .fa-bars {
      display: none;
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: start;
      margin-left: -1px;
      list-style-type: none;
    }
    li {
      margin: 0.25em 0;
      border-left: 1px solid #ccc;
      padding: 0 1em;
      justify-content: space-between;
      font-size: 1em;

      &.first {
        border-left: 0px;
      }
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
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;

    nav {
      .fa-bars {
        display: inline-block;
        position: absolute;
        top: 10px;
        // right: 10px;
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
  }
`

const Nav = props => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = e => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

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
            <li className="first">home</li>
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
  )
}

export default Nav
