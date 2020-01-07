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
      margin: 5px 0;
      padding: 0 0 0 20px;
    }
    li {
      margin: 0.25em 0;
      border-left: 2px solid black;
      padding: 0 1em;
      justify-content: space-between;
      font-size: 1em;
      line-height: 0.9em;

      &.first {
        border-left: 0px;
      }
    }
    a {
      font-size: 1em;
      text-decoration: none;
      color: black;
      &.active {
        color: #0929f3;
      }
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
      display: block;
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;

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
          background-color: #0929f3;
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
          margin: 0px !important;
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

  const handleLinkClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleToggle = evt => {
    evt.preventDefault()
    setIsExpanded(!isExpanded)
  }

  return (
    <Navigation>
      <nav className="nav">
        <i
          className="fa fa-bars"
          aria-hidden="true"
          onClick={handleToggle}
        />
        <ul onClick={handleLinkClick} className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink activeClassName="active" exact to="/">
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
