import React from "react"
import { NavLink, BrowserRouter as Router, Switch } from "react-router-dom"

function Footer() {
  return (
    <div>
      <div id="copyright">
        <p>
          Mindfulness is not a switch we can turn on; it is a journey and an
          undertaking. We hope to build a community of compassionate people that
          help each other react to life with an open heart, creating reminders
          for our pursuit of happiness. If this resonates with you, we'd love
          for you to <a href="/login">join us</a>.
        </p>
      </div>

      <div id="footer">
            <ul>
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
        <a href="mailto:artandlightsociety@gmail.com">contact us</a>
      </div>
    </div>
  )
}

export default Footer
