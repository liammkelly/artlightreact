import React, { useEffect } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { connect } from "react-redux"

import { getClasses } from "./actions"

import Header from "./components/Header"
import Selector from "./components/Selector"
import Footer from "./components/Footer"

import HomePage from "./pages/home-page"
import ClassesPage from "./pages/classes-page"
import InformationPage from "./pages/information-page"
import CalendarPage from "./pages/calendar-page"
import LoginPage from "./pages/login-page"
import RegistrationPage from "./pages/registration-page"

const App = props => {
  useEffect(() => {
    props.getClasses()
  }, [])

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/classes" component={ClassesPage} />
        <Route path="/information" component={InformationPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
      </Switch>
      <Selector />
      <Footer />
    </Router>
  )
}

const mapStateToProps = state => ({
  classes: state.classes.classes,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => {
  return {
    getClasses: () => dispatch(getClasses())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
