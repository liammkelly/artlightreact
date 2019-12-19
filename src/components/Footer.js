import React from "react"
import { NavLink, BrowserRouter as Router, Switch } from "react-router-dom"

import styled from "styled-components";

const FooterContainer = styled.div`
position: relative;
margin: 0 auto;
overflow: hidden;
width: 70%;

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:start;
  margin-left: -1px;
  list-style-type:none

  li {
    flex-grow: 1;
    flex-basis: auto;
    margin: .25em 0;
    padding: 0 1em;
    text-align: center;
    border-left: 1px solid #ccc;
    background-color: #fff;

    &.first {
      border-left: 0px;
    }
  }
}`

function Footer() {
  return (
    <div id="footer">
      <div id="copyright">
        <p>
          Mindfulness is not a switch we can turn on; it is a journey and an
          undertaking. We hope to build a community of compassionate people that
          help each other react to life with an open heart, creating reminders
          for our pursuit of happiness. If this resonates with you, we'd love
          for you to <a href="/login">join us</a>.
        </p>
      </div>

      <FooterContainer>
          <ul>
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
            <NavLink to="mailto:artandlightsociety@gmail.com">
              <li>contact us</li>
            </NavLink>
          </ul>
      </FooterContainer>
    </div>
  )
}

export default Footer
